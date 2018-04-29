import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/preloader';
import About from '../About/About';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Testimonials from '../Testimonials/Testimonials';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Counter from "../Counter/Counter";
import plugins from "../../../public/js/plugins_v2";
import $ from "jquery";

class Homepage extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		let that = this;
		$(document).ready(function () {
			plugins.smothScrolling();
			plugins.navBarScrolling();
			plugins.countTo();
			plugins.magnificPopup();
			plugins.googleMaps();
			plugins.wow();
			plugins.preloader(that.props.history.action);
		});
	}

	render(){
		return (
			<div>
				<Preloader />
				<Header />
				<About />
				<Services />
				<Counter />
				<Portfolio />
				<Testimonials />
				<Blog />
				<Contact
					source={"Homepage"}
				/>
				<Footer />
			</div>
		);
	}
}

export default Homepage;
