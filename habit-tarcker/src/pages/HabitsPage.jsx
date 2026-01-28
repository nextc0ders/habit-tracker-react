import HabitList from '../components/HabitList'
import { useHabits } from '../context/HabitsContext'

function HabitsPage() {

	const {
		habits,
		title,
		setTitle,
		toggleHabit,
		addHabit
	} = useHabits()

	const today = new Date().toISOString().slice(0, 10)

	return (
		<>
			<h1>Мои привычки</h1>
			<form onSubmit={(e) => {
				e.preventDefault()
				addHabit()
			}}>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Новая привычка"
				/>
				<button type="submit">Добавить</button>
			</form>

			<ul>
				{habits.map(habit => {
					const completed = habit.completedDates.includes(today)

					return (
						<li key={habit.id} className={completed ? 'completed' : ''}>
							<label className='habit-item'>
								<input
									type='checkbox'
									checked={completed}
									onChange={() => toggleHabit(habit.id)}
								/>
								<span>{habit.title}</span>
							</label>
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default HabitsPage