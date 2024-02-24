import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ActiveSprint from './pages/ActiveSprint';
import CreateTask from './pages/CreateTask';
import './sass/Home.scss';

const App: React.FC = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/active-sprint" element={<ActiveSprint />} />
					<Route path="/create-task" element={<CreateTask />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
