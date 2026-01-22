import { createContext, useContext, useEffect, useState } from "react";

const HabitsContext = createContext(null);

export function HabitsProvider({ children }) {
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

	const addHabit = () => {
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
		<HabitsContext.Provider
			value={{
				habits,
				title,
				setTitle,
				toggleHabit,
				addHabit,
			}}
		>
			{children}
		</HabitsContext.Provider>
	)
}

export function useHabits() {
	const context = useContext(HabitsContext)
	if(!context) {
		throw new Error('useHabits необходимо использовать внутри HabitsProvider')
	}

	return context
}