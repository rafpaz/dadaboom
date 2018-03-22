import React from 'react';
import NavigationBar from "./NavigationBar";
import WelcomeArea from "./WelcomeArea";

const Header = () => (
	<header className="header" id="intro">
		<div className="overlay">
			<NavigationBar/>
      		<WelcomeArea/>
		</div>
	</header>
);

export default Header;
