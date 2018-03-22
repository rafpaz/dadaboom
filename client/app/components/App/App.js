import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom'
import Homepage from '../Home/Homepage';
import NotFound from "../App/NotFound";
import LandingPageKids from "../LP/LandingPageKids";
import LandingPage from "../LP/LandingPage";

const App = () => (
	<Router>
		<Switch>
			<Route exact path={"/"} component={Homepage}/>
			<Route path={"/contact"} component={LandingPage}/>
			<Route path={"/school"} component={LandingPageKids}/>
			<Route component={NotFound}/>
		</Switch>
	</Router>
);

export default App;
