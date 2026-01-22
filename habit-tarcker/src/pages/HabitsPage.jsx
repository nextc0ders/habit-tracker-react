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

			{habits.map(habit => (
				<div key={habit.id}>
					<input
						type='checkbox'
						checked={habit.completedDates.includes(
							new Date().toISOString().slice(0, 10)
						)}
						onChange={() => toggleHabit(habit.id)}
					/>
					{habit.title}
				</div>
			))}
		</>
	)
}

export default HabitsPage