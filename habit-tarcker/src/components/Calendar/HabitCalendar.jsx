import './HabitCalendar.css'

function HabitCalendar({ completedDates }) {

	const today = new Date()
	const year = today.getFullYear()
	const month = today.getMonth()

	const daysInMonth = new Date(year, month + 1, 0).getDate()
	const completedThisMonth = completedDates.filter(date => date.startsWith(`${year}-${String(month + 1).padStart(2, '0')}`)).length
	const percent = Math.round((completedThisMonth / daysInMonth) * 100)

	const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
	const firstDay = new Date(year, month, 1).getDay() || 7
	
	return (
		<div className='calendar'>
			<h3>{month + 1} / {year}</h3>

			<div className='calendar-grid'>

				{weekDays.map(day => (
					<div key={day} className='calendar-weekday'>
						{day}
					</div>
				))}

				{Array.from({ length: firstDay - 1 }).map((_, i) => (
					<div key={`empty-${i}`} className='calendar-empty'></div>
				))}

				{Array.from({ length: daysInMonth }, (_, i) => {
					const day = i + 1

					const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
					const isDone = completedDates.includes(dateStr)

					const isToday = day === today.getDate()

					return (
						<div
							key={day}
							className={`calendar-day
												${isDone ? 'done' : ''}
												${isToday ? 'today' : ''}`}
						>
							{day}
						</div>
					)
				})}

			</div>

			<div className="pregress-container">
				<p>Выполнено за месяц: <strong>{percent} %</strong></p>
				<div className="progress">
					<div className="progress-fill" style={{width: `${percent}%`}}></div>
				</div>
			</div>

		</div>

	)
}

export default HabitCalendar