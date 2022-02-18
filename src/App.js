import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
//import browser router y envolver todo
function App() {
	return (
		<div>
			<Header />
			<Home />
		</div>
	);
}

export default App;
