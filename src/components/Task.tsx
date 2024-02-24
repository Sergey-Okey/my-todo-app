import React from 'react';
import '../sass/Home.scss';

interface TaskProps {
	title: string;
	description: string;
}

const Task: React.FC<TaskProps> = ({ title, description }) => {
	return (
		<div className="task">
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
}

export default Task;
