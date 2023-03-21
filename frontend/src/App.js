import logo              from './logo.svg';
import './App.css';
import Home              from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import { CssBaseline }   from "@mui/material";
import React             from "react";
import Listings          from "./components/listings/Listings";
import Login             from "./components/login/Login";
import Header            from "./components/header/Header";

function App() {
	return (
		<div className="App">
			<CssBaseline/>
			<Header/>
			<Routes>
				<Route path="/" element={ <Home/> }/>
				<Route path="/login" element={ <Login/> }/>
				<Route path="/listenings" element={ <Listings/> }/>
			</Routes>
		</div>
	);
}

export default App;
