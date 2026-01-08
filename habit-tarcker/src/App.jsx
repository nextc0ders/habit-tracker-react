import { useState } from 'react'
import Header from './components/Header'
import HabitList from './components/HabitList'

function App() {
	const [habits, setHabits] = useState([])
	const [title, setTitle] = useState('')

	const toggleHabit = (id) => {
		setHabits(habits.map(habit => 
			habit.id === id
				? { ...habit, completed: !habit.completed }
				: habit
		))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if(!title.trim()) return

		setHabits([
			...habits,
			{
				id: crypto.randomUUID(),
				title: title.trim(),
				completed: false
			}
		])

		setTitle('')
	}

	return (
		<div>
			<Header />

			<form onSumbit={handleSubmit}>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Новая привычка"
				/>
				<button
					type="submit"
					onClick={handleSubmit}
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