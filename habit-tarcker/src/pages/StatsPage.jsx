import { useState } from 'react'
import { useHabits } from '../context/HabitsContext'
import HabitCalendar from '../components/Calendar/HabitCalendar'


function StatsPage() {
	const { habits } = useHabits()

	const [selectedId, setSelectedId] = useState('')
	const selectedHabit = habits.find(habit => habit.id === selectedId)

	const total = habits.length
	const completedToday = habits.filter(habit =>
		habit.completedDates.includes(
			new Date().toISOString().slice(0, 10)
		)
	).length

	return (
		<section>
			<h1>Статистика</h1>

			<div className='stats-card'>

				<div className='card'>
					<p>Всего привычек: <strong>{total}</strong> </p>
				</div>

				<div className='card'>
					<p>Выполнено сегодня: <strong>{completedToday}</strong> </p>
				</div>

				<div className='stats-select'>
					<select
						value={selectedId}
						onChange={(e) => setSelectedId(e.target.value)}
					>
						<option value="">Выберите привычку</option>

						{habits.map(habit => {
							return (
								<option key={habit.id} value={habit.id}>
									{habit.title}
								</option>
							)
						})}
					</select>
				</div>

				{!selectedHabit && (
					<p className='hint'>
						Выберите привычку, чтобы увидеть статистику
					</p>
				)}

				{selectedHabit && (
					<div className='habit-stats'>
						<h2>{selectedHabit.title}</h2>

						<HabitCalendar completedDates={selectedHabit.completedDates}/>
					</div>
				)}
	
			</div>
		</section>
	)
}

export default StatsPage