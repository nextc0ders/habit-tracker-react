import './HabitLineChart.css'

function HabitLineChart({ completedDates }) {

	const today = new Date()
	const year = today.getFullYear()
	const month = today.getMonth()
	const daysInMonth = new Date(year, month + 1, 0).getDate()

	const points = Array.from({ length: daysInMonth }, (_, i) => {
		const day = i + 1
		const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
		return completedDates.includes(dateStr) ? 100 : 20
	})

	return (
		<div className="line-chart">
			<h3>Автивность за месяц</h3>

				<div className="chart">
					{points.map((height, i) => {
						const day = i + 1
						const isToday = day === today.getDate()
						
						return (
							<div
								key={i}
								className={`chart-column ${isToday ? 'today' : ''}`}
							>
								<div
									className="chart-point"
									style={{ height: `${height}%` }}
								>
									<span className="chart-label">{day}</span>
								</div>
							</div>
						)
					})}
				</div>
		</div>
	)

}

export default HabitLineChart