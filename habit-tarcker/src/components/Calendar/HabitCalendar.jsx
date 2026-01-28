function HabitCalendar({ completedDates }) {

	const today = new Date()
	const year = today.getFullYear()
	const month = today.getMonth()

	const daysInMonth = new Date(year, month + 1, 0).getDate()
	
	return (
		<div className='calendar'>
			<h3>{month + 1} / {year}</h3>

			<div className='calendar-grid'>
				{Array.from({ length: daysInMonth }, (_, i) => {
					const day = i + 1
					const dateStr = `${String(day).padStart(2, '0')}-${String(month + 1).padStart(2, '0')}-${year}`
					const isDone = completedDates.includes(dateStr)

					return (
						<div
							key={day}
							className={`calendar-day ${isDone ? 'done' : ''}`}
						>
							{day}
						</div>
					)
				})}
			</div>

		</div>

	)
}

export default HabitCalendar