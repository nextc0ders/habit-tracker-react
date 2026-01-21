import HabitList from '../components/HabitList'

function HabitsPage({ habits, title, setTitle, onToggle, onSubmit }) {
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Новая привычка"
				/>
				<button type="submit">Добавить</button>
			</form>

			<HabitList habits={habits} onToggle={onToggle} />
		</div>
	)
}

export default HabitsPage