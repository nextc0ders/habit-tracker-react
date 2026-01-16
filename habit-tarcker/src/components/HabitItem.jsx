import { getStreak } from '../utils/getStreak'
import { getLast7Days } from '../utils/getLast7Days'

function HabitItem({ habit, onToggle }) {
	const completedDates = habit.completedDates || []
	const today = new Date().toISOString().slice(0, 10)
	const days = getLast7Days()
	const doneToday = habit.completedDates.includes(today)
	const streak = getStreak(habit.completedDates)

	const check_icon = <box-icon name='check' color="var(--success)"></box-icon>
	const x_icon = <box-icon name='x' color="#fa5c88"></box-icon>

	return (
		<li>
			<div
				onClick={() => onToggle(habit.id)}
				style={{ cursor: 'pointer' }}
			>
				{habit.completedDates.includes(today) ? check_icon : x_icon}
				{habit.title}
				{streak > 0 && <span>🔥 {streak}</span>}
			</div>

			<div style={{ display: 'flex', gap: 4 }}>
				{days.map(day => (
					<span key={day}>
						{habit.completedDates.includes(day) ? check_icon : x_icon}
					</span>
				))}
			</div>
		</li>
	)
}

export default HabitItem