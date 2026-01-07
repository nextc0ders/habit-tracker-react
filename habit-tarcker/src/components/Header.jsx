function Header() {
	const title = 'Трекер Привычек'
	const year = new Date().getFullYear()
	const brand = 'Next Coders'

	return (
		<header>
			<h1>{title}</h1>
			<p>© {year} {brand}</p>
		</header>
	)
}

export default Header