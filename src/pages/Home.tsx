// src/pages/Home.tsx
import React from 'react';
import Task from '../components/Task';
import '../sass/Home.scss';
const Home: React.FC = () => {
	const tasks = [
		{ title: 'Задача 1', description: 'Описание задачи 1' },
		{ title: 'Задача 2', description: 'Описание задачи 2' },
	];

	return (
		<div>
			<h1>Главная</h1>
			{tasks.map((task, index) => (
				<Task key={index} title={task.title} description={task.description} />
			))}
		</div>
	);
}

export default Home;
