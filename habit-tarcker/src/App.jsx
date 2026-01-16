import Header from './components/Header'
import HabitList from './components/HabitList'
import ThemeFloatingToggle from './components/ThemeFloatingToggle'
import { useState, useEffect } from 'react'

function App() {

	const [habits, setHabits] = useState(() => {
		const saved = localStorage.getItem('habits')
		return saved ? JSON.parse(saved) : []
	})

	const [title, setTitle] = useState('')

	useEffect(() => {
		localStorage.setItem('habits', JSON.stringify(habits))
	}, [habits])

	const today = () => new Date().toISOString().slice(0, 10)

	const toggleHabit = (id) => {
		const date = today()

		setHabits(prev =>
			prev.map(habit => {
				if (habit.id !== id) return habit

				const doneToday = habit.completedDates.includes(date)

				return {
					...habit,
					completedDates: doneToday
						? habit.completedDates.filter(d => d !== date)
						: [...habit.completedDates, date]
				}
			})
		)
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

	return (
		<div>
			<Header />
			<ThemeFloatingToggle />

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Новая привычка"
				/>
				<button type="submit">Добавить</button>
			</form>

			<HabitList habits={habits} onToggle={toggleHabit} />
		</div>
	)
}

export default App