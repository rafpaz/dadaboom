import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PortfolioImage extends Component {
	render() {
		return (
			<div className="col-md-4 col-sm-6 portfolio-b">
				<a href={"img/portfolio/fullsize/" + this.props.imgName + ".jpg"} className="portfolio-box">
					<img src={"img/portfolio/thumbnails/" + this.props.imgName + ".jpg"} className="img-responsive"
						 alt={this.props.alt}/>
				</a>
			</div>
		);
	}
}

PortfolioImage.propTypes = {
	imgName: PropTypes.string,
	alt: PropTypes.string
};

export default PortfolioImage;

