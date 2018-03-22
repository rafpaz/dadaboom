import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BlogBox extends Component {
	render() {
		return (
			<div className="col-sm-4 col-xs-12">
				<div className="blog-item">
					<div className="blog-img">
						<a href={"/blog/" + this.props.href}>
							<img className="img-responsive" src={"img/blogs/"+ this.props.img + ".jpg"} alt={this.props.alt}/>
							{/* ====================  Blog Picture Here ==================== */}
						</a>
					</div>
					<div className="blog-content">
						<div className="blog-content-head">
							<h3 className="blog-content-title">
								<a href="single-blog.html">{this.props.title}</a>
							</h3>
						</div>
						<div className="blog-content-desc">
							<p>{this.props.text}</p>
						</div>
						<div className="blog-content-footer">
							<a href={"/blog/" + this.props.href}>
								<span>קרא עוד</span>
								<i className="fa fa-long-arrow-left" aria-hidden="true"/>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

BlogBox.propTypes = {
	href: PropTypes.string,
	img: PropTypes.string,
	alt: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string

};

export default BlogBox;
