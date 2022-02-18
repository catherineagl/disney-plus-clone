import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Detail from './components/Detail';
//import browser router y envolver todo
function App() {
	return (
		<div>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/detail" element={<Detail />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
