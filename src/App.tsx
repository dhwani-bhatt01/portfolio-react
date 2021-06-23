import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path="/" component={Homepage} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
