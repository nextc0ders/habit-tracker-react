import { useState } from 'react'
import Header from './components/Header'

function App() {
	const [habits, setHabits] = useState([])

	const addHabit = () => {
		setHabits([
			...habits,
			{
				id: crypto.randomUUID(),
				title: 'Новая привычка',
				completed: false
			}
		])
	}

	const toggleHabit = (id) => {
		setHabits(habits.map(habit => {
			if (habit.id !== id) {
				return habit
			}
			
			return {
				...habit,
				completed: !habit.completed
			}
		}))

	}

	return (
		<div>
			<Header />
			
			<ul>
				{habits.map(habit => (
					<li
						key={habit.id}
						onClick={() => toggleHabit(habit.id)}
						style={{ cursor: 'pointer' }}
					>
						{habit.title} - {habit.completed ? '✅' : '❌'}
					</li>
				))}
			</ul>

			<button onClick={addHabit}>
				Добавить привычку
			</button>
		</div>
	)
}

export default App