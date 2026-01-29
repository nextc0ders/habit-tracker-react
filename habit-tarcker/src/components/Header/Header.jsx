import './Header.css'

function Header() {
	const title = 'Трекер Привычек'
	const year = new Date().getFullYear()
	const brand = 'Next Coders'

	return (
		<header>
			<div className='Logo'>{title}</div>

			<p>© {year} {brand}</p>
		</header>
	)
}

export default Header