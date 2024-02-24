import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/Home.scss'

const Navbar: React.FC = () => {
	return (
		<nav>
			<ul>
				<li><Link to="/">Главная</Link></li>
				<li><Link to="/active-sprint">Активный спринт</Link></li>
				<li><Link to="/create-task">Создание задачи</Link></li>
			</ul>
		</nav>
	);
}

export default Navbar;
