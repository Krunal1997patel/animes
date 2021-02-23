import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js'
import Dashboard from './components/Dashboard.js'


function App() {
	return (

		<div className='App'>

		<Navbar/>

		<Route exact path='/' component={Dashboard} />
		


		</div>
	);
}

export default App;
