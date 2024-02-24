import React from 'react';
import Task from './Task';
import '../sass/Home.scss';

interface SprintBoardProps {
	tasks: { title: string; description: string }[];
}

const SprintBoard: React.FC<SprintBoardProps> = ({ tasks }) => {
	return (
		<div className="sprint-board-container">
			<div className="task-list">
				{tasks.map((task, index) => (
					<Task key={index} title={task.title} description={task.description} />
				))}
			</div>
		</div>
	);
}

export default SprintBoard;
