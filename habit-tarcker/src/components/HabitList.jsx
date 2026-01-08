import HabitItem from './HabitItem'

function HabitList({ habits, onToggle }) {
	return (
		<ul>
			{habits.map(habit => (
				<HabitItem
					key={habit.id}
					habit={habit}
					onToggle={onToggle}
				/>
			))}
		</ul>
	)
}

export default HabitList