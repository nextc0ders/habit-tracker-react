import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext()

export function ThemeProvider({ children }) {

	const getInitialMode = () => localStorage.getItem('theme-mode') || 'system'

	const getSystemTheme = () =>
		window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

	const [mode, setMode] = useState(getInitialMode)
	const [theme, setTheme] = useState( mode === 'system' ? getSystemTheme() : mode )

	// применяем тему
	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme])

	// сохраняем режим
	useEffect(() => {
		localStorage.setItem('theme-mode', mode)
	}, [mode])

	// слушаем ОС
	useEffect(() => {
		if (mode !== 'system') return
		const media = window.matchMedia('(prefers-color-scheme: dark)')
		const handler = (e) => { setTheme(e.matches ? 'dark' : 'light') }
		media.addEventListener('change', handler)
		return () => media.removeEventListener('change', handler)
	}, [mode])

	const setLightMode = () => {
		setMode('light');
		setTheme('light');
	}
	const setDarkMode = () => {
		setMode('dark');
		setTheme('dark');
	}
	const setSystemMode = () => {
		setMode('system');
		setTheme(getSystemTheme());
	}


	

	return (
		<ThemeContext.Provider value={{ theme, mode, setMode, setLightMode, setDarkMode, setSystemMode }} >
			{children}
		</ThemeContext.Provider>
	)
}

export function useTheme() {
	return useContext(ThemeContext)
}