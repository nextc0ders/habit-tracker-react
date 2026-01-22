import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'boxicons'
import { ThemeProvider } from './context/ThemeContext'
import { HabitsProvider } from './context/HabitsContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<HabitsProvider>
					<App />
				</HabitsProvider>
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>,
)
