import { useHabits } from '../context/HabitsContext'

function StatsPage() {
	const { habits } = useHabits()

	const total = habits.length
	const completedToday = habits.filter(habit =>
		habit.completedDates.includes(
			new Date().toISOString().slice(0, 10)
		)
	).length

	return (
		<section>
			<h1>Статистика</h1>
			<p>Всего привычек: {total}</p>
			<p>Выполнено сегодня: {completedToday}</p>
		</section>
	)
}

export default StatsPage