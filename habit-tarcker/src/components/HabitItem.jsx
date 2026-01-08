function HabitItem({ habit, onToggle }) {
	return (
		<li 
			onClick={() => onToggle(habit.id)}
			style={{ cursor: 'pointer' }}
		>
			{habit.completed ? '✅' : '❌'} {habit.title}
		</li>
	)
}

export default HabitItem