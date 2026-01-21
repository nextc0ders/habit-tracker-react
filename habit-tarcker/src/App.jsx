import Header from './components/Header'
import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import HabitsPage from './pages/HabitsPage';
import StatsPage from './pages/StatsPage';
import AboutPage from './pages/AboutPage';
import SettingsPage from './pages/SettingsPage';
import Footer from './components/Footer/Footer'

function App() {

	const [habits, setHabits] = useState(() => {
		const saved = localStorage.getItem('habits')
		return saved ? JSON.parse(saved) : []
	})

	const [title, setTitle] = useState('')

	useEffect(() => {
		localStorage.setItem('habits', JSON.stringify(habits))
	}, [habits])

	const today = () => new Date().toISOString().slice(0, 10)

	const toggleHabit = (id) => {
		const date = today()

		setHabits(prev =>
			prev.map(habit => {
				if (habit.id !== id) return habit

				const doneToday = habit.completedDates.includes(date)

				return {
					...habit,
					completedDates: doneToday
						? habit.completedDates.filter(d => d !== date)
						: [...habit.completedDates, date]
				}
			})
		)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if(!title.trim()) return

		setHabits([
			...habits,
			{
				id: crypto.randomUUID(),
				title: title.trim(),
				completedDates: []
			}
		])

		setTitle('')
	}

	return (
		<div>
			<Header />

			<Routes>
				<Route
					path="/"
					element={
						<HabitsPage
							habits={habits}
							title={title}
							setTitle={setTitle}
							onToggle={toggleHabit}
							onSubmit={handleSubmit}
						/>
					}
				/>

				<Route path="/stats" element={<StatsPage habits={habits} />} />

				<Route path="/about" element={<AboutPage />} />

				<Route path="/settings" element={<SettingsPage />} />
			</Routes>

			<Footer />
		</div>
	)
}

export default App