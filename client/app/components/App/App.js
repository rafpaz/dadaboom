import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'
import Homepage from '../Home/Homepage';
import NotFound from "../App/NotFound";
import LandingPageKids from "../LP/LandingPageKids";
import LandingPage from "../LP/LandingPage";
import Post from "../Post/Post";

const App = () => (
	<Router>
		<Switch>
			<Route exact path={"/"} component={Homepage}/>
			<Route path={"/landing"} component={LandingPage}/>
			<Route path={"/school"} component={LandingPageKids}/>
			<Route path={"/blog"} component={Post}/>
			<Route component={NotFound}/>
		</Switch>
	</Router>
);

export default App;
