import { tasks } from '../data/task'

export default function AppMain() {
	const message = 'Welcome to my React App'

	console.log(tasks)
	const currentTasks = tasks.filter((task) => task.state === 'in_progress' || task.state === 'backlog')
	const completedTasks = tasks.filter((task) => task.state === 'completed')
	return (
		<main>
			<p>Current Tasks ({currentTasks.length})</p>
			<ul>
				{currentTasks.map((task) => (
					<li key={task.id}>
						<p>
							<span className='task-title'>{task.title}</span>
							<span className='task-state'>{task.state}</span>
						</p>
						<p>Priority: {task.priority}</p>
						<p>Est. Time: {task.estimatedTime}</p>
					</li>
				))}
			</ul>
			<hr />
			<p>Completed Tasks ({completedTasks.length})</p>

			<ul>
				{completedTasks.map((task) => (
					<li key={task.id}>
						<p>
							<span className='task-title'>{task.title}</span>
							<span className='task-state'>{task.state}</span>
						</p>
						<p>Priority: {task.priority}</p>
						<p>Est. Time: {task.estimatedTime}</p>
					</li>
				))}
			</ul>
		</main>
	)
}
