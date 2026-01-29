export function calculateStreak(dates) {
	if (!dates || dates.length === 0) return 0

	const sorted = [...dates].sort(
		(a, b) => new Date(a) - new Date(b)
	)

	let streak = 1

	for (let i = sorted.length -1; i > 0; i--) {
		const current = new Date(sorted[i])
		const prev = new Date(sorted[i - 1])

		const diffDays = (current - prev) / (1000 * 60 * 60 * 24)

		if (diffDays === 1) {
			streak++
		} else {
			break
		}
	}

	return streak
}