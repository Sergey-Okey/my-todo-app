import React from 'react';
import TaskForm from '../components/TaskForm';
import '../sass/Home.scss'

const CreateTask: React.FC = () => {
	return (
		<div className="create-task">
			<h1>Создание задачи</h1>
			<TaskForm />
		</div>
	);
}

export default CreateTask;
