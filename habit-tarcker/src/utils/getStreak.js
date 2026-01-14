export const getStreak = (dates = []) => {
	if (!dates.length) return 0

	const set = new Set(dates)
	let streak = 0
	const day = new Date()

	while(true) {
		const date = day.toISOString().slice(0, 10)

		if(set.has(date)) {
			streak++
			day.setDate(day.getDate() - 1)
		} else {
			break
		}
	}

	return streak
}