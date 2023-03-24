import logo              from './logo.svg';
import './App.css';
import Home              from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import { CssBaseline }   from "@mui/material";
import React             from "react";
import Listings          from "./components/listings/Listings";
import Login             from "./components/login/Login";
import Header            from "./components/header/Header";
import Testing           from "./components/testing/Testing";

function App() {
	return (
		<div className="App">
			<CssBaseline/>
			<Header/>
			<Routes>
				<Route path="/" element={ <Home/> }/>
				<Route path="/login" element={ <Login/> }/>
				<Route path="/listings" element={ <Listings/> }/>
				<Route path="/testing" element={ <Testing/> }/>
			</Routes>
		</div>
	);
}

export default App;
