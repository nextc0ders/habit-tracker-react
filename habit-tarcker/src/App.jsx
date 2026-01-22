import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";

import MainLayout from './layout/MainLayout'
import HabitsPage from './pages/HabitsPage';
import StatsPage from './pages/StatsPage';
import AboutPage from './pages/AboutPage';
import SettingsPage from './pages/SettingsPage';

function App() {

	return (
		<div>

			<Routes>
				<Route element={<MainLayout />}>
					<Route index element={ <HabitsPage /> } />
					<Route path="stats" element={ <StatsPage/> } />
					<Route path="about" element={ <AboutPage /> } />
					<Route path="settings" element={ <SettingsPage /> } />
				</Route>
			</Routes>

		</div>
	)
}

export default App