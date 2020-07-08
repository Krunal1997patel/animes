import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dashboard from './comoned/Dashboard.js';
import Navbar from './comoned/Navbar.js';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Route exact path='/' component={Dashboard} />
		</div>
	);
}

export default App;
