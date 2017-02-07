// Libraries
import React from "react";
import { Router, Route, hashHistory, IndexRoute } from "react-router";

// Components 
import NavBar from "./partials/NavBar";

var App = () => (
		<Router history={hashHistory}>
			<Route path="/" component={NavBar}>
				<IndexRoute component={myComponent}/>
			</Route>
		</Router>
	);


const myComponent = () => (<h3>This is a child!</h3>);

export default App;
