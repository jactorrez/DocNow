// Libraries
import React from "react";
import { Router, Route, hashHistory, IndexRoute } from "react-router";

// Components 
import NavBar from "./partials/NavBar";
import Home from "./pages/Home/index";

var App = () => (
		<Router history={hashHistory}>
			<Route path="/" component={NavBar}>
				<IndexRoute component={Home}/>
			</Route>
		</Router>
	);

export default App;
