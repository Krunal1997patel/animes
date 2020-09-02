import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dashboard from './comoned/Dashboard.js';
import Navbar from './comoned/Navbar.js';
import Footer from './comoned/Footer.js';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Route exact path='/' component={Dashboard} />
			<Footer />
		</div>
	);
}

export default App;
