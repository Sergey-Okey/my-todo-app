import React from 'react';
import SprintBoard from '../components/SprintBoard';
import '../sass/Home.scss'

const ActiveSprint: React.FC = () => {
	const activeSprintTasks = [
		{ title: 'Задача 1', description: 'Описание задачи 1' },
		{ title: 'Задача 2', description: 'Описание задачи 2' },
	];

	return (
		<div>
			<h1>Активный спринт</h1>
			<SprintBoard tasks={activeSprintTasks} />
		</div>
	);
}

export default ActiveSprint;
