import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Preloader from "../Preloader/preloader";
import $ from "jquery";
import plugins from "../../../public/js/plugins_v2";
import PostSection from "./PostSection";
import Footer from "../Footer/Footer";
import PostHeader from "./PostHeader";
import Contact from "../Contact/Contact";

class Post extends Component {
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

	render() {
		return (
			<div>
				<Preloader />
				<PostHeader/>
				<PostSection/>
				<Contact
					source={"Post"}
				/>
				<Footer />
			</div>
		);
	}
}

Post.propTypes = {};

export default Post;
