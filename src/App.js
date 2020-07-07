import React from 'react';

import './App.css';
import Dashboard from './comoned/Dashboard.js';
import Navbar from './comoned/Navbar.js';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Dashboard />
		</div>
	);
}

export default App;
