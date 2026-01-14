export const getLast7Days = () => {
	const days = []
	const date = new Date()

	for(let i = 6; i >= 0; i--) {
		const d = new Date(date)
		d.setDate(d.getDate() - i)
		days.push(d.toISOString().slice(0, 10))
	}

	return days
}