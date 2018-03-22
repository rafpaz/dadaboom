import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NavigationItems from "./NavigationItems";

class NavigationBar extends Component {

	render() {

		return (
			<nav className="navbar navbar-default navbar-fixed-top mynavbar">
				<div className="container">
					{/* <!-- The navbar for mobile display --> */}
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-mobile" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar" />
							<span className="icon-bar" />
							<span className="icon-bar" />
						</button>
						<a className="navbar-brand" href=".">D<span>A</span>D<span>A</span>BOOM</a>
					</div>
					{/* <!-- The navbar for other displays --> */}
					<div className="collapse navbar-collapse" id="navbar-mobile">
						<NavigationItems />
					</div>
					{/* <!-- /.navbar-collapse --> */}
				</div>
				{/* <!-- /.container--> */}
			</nav>
		);
	}
}

NavigationBar.propTypes = {};

export default NavigationBar;
