import { NavLink } from 'react-router-dom';
import './Footer.css'

function Footer() {
	return (
		<footer className='footer'>

			<NavLink
				to="/"
				end
				className={({ isActive }) =>
					isActive ? 'nav-item active' : 'nav-item'
				}
			>
				<box-icon name='home-alt' color='var(--text)'></box-icon>
				<span>Привычки</span>
			</NavLink>

			<NavLink
				to="/stats"
				end
				className={({ isActive }) =>
					isActive ? 'nav-item active' : 'nav-item'
				}
			>
				<box-icon name='stats' color='var(--text)'></box-icon>
				<span>Статистика</span>
			</NavLink>

			<NavLink
				to="/about"
				end
				className={({ isActive }) =>
					isActive ? 'nav-item active' : 'nav-item'
				}
			>
				<box-icon name='info-circle' color='var(--text)'></box-icon>
				<span>О приложении</span>
			</NavLink>

			<NavLink
				to="/settings"
				end
				className={({ isActive }) =>
					isActive ? 'nav-item active' : 'nav-item'
				}
			>
				<box-icon name='cog' color='var(--text)' ></box-icon>
				<span>Настройки</span>
			</NavLink>

		</footer>
	)
}

export default Footer