import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PostHeader extends Component {
	render() {
		return (
			<header className="header" id="post-bg">
				<div className="overlay">
					<div className="blog-area">
						<div className="container">
							<div className="row post-right">
								<div className="col-md-12">
									<h2>פוסט לדוגמא</h2>
									<p>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק.</p>
								</div>
								<div className="col-md-12">
									<ol className="breadcrumb">
										<li className="breadcrumb-item"><Link to={"/"}>בית</Link></li>
										<li className="breadcrumb-item active">פוסט לדוגמא</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

PostHeader.propTypes = {};

export default PostHeader;
