import { useState, useEffect } from 'react'
import Header from './components/Header'
import HabitList from './components/HabitList'

function App() {
	const [habits, setHabits] = useState(() => {
		const saved = localStorage.getItem('habits')
		return saved ? JSON.parse(saved) : []
	})
	const [title, setTitle] = useState('')

	useEffect(() => {
		localStorage.setItem('habits', JSON.stringify(habits))
	}, habits)

	const toggleHabit = (id) => {
		const date = today()

		setHabits(habits.map(habit => {
			if (habit.id !== id) return habit

			const doneToday = habit.completedDates.includes(date)

			return {
				...habit,
				completedDates: doneToday
					? habit.completedDates.filter(d => d !== date)
					: [...habit.completedDates, date]
			}
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if(!title.trim()) return

		setHabits([
			...habits,
			{
				id: crypto.randomUUID(),
				title: title.trim(),
				completedDates: []
			}
		])

		setTitle('')
	}

	const today = () => {
		return new Date().toISOString().slice(0, 10)
	}

	return (
		<div>
			<Header />

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Новая привычка"
				/>
				<button
					type="submit"
					// onClick={handleSubmit}
				>
					Добавить
				</button>
			</form>

			<HabitList
				habits={habits}
				onToggle={toggleHabit}
			/>
		</div>
	)
}

export default App