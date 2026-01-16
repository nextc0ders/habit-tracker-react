import { useTheme } from '../context/ThemeContext'
import './ThemeToggle.css';
import './ThemeFloatingToggle.css'

function ThemeFloatingToggle() {
	const { mode, setLightMode, setDarkMode, setSystemMode } = useTheme()

	return (
		<div className="theme-fab">
			<button className={`mode-btn ${mode === "light" ? "active" : ""}`} onClick={setLightMode} title="Light theme">
				<box-icon name='sun' type='solid' color='var(--icon-sun)' ></box-icon>
			</button>
			<button className={`mode-btn ${mode === "dark" ? "active" : ""}`} onClick={setDarkMode} title="Dark theme">
				<box-icon name='moon' type='solid' color='var(--icon-moon)' ></box-icon>
			</button>
			<button className={`mode-btn ${mode === "system" ? "active" : ""}`} onClick={setSystemMode} title="System preferances">
				<box-icon name='desktop' color='var(--icon-system)' ></box-icon>
			</button>
		</div>
	)
}

export default ThemeFloatingToggle