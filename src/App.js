import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js'
import Dashboard from './components/Dashboard.js'
import Manga from './components/Manga.js';
import Schedule from './components/Schedule.js';
import News from './components/News.js';


function App() {
	return (

		<div className='App'>

		<Navbar/>

		<Route exact path='/' component={Dashboard} />
		
		<Route exact path='/manga' component={Manga}/>

		<Route exact path='/schedule' component={Schedule}/>
		<Route exact path='/news' component={News}/>

		</div>
	);
}

export default App;
