import React, {Component} from 'react';
import PortfolioImage from "./PortfolioImage";
import PortfolioVideo from "./PortfolioVideo";


class Portfolio extends Component {
	render(){
		return (
			<section id="portfolio" className="portfolio-section">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="section-title">
								<h1>גלריה</h1>
							</div>
						</div>
					</div>
					<div className="row popup-gallery">
						<PortfolioImage
							imgName={"p1"}
							alt={"First Image"}
						/>
						<PortfolioImage
							imgName={"p2"}
							alt={"Second Image"}
						/>
						<PortfolioImage
							imgName={"p3"}
							alt={"Third Image"}
						/>
						<PortfolioVideo
							videoId={"lUaMXm_DLJ4"}
						/>
						<PortfolioVideo
							videoId={"GNFQ8WzHc1w"}
						/>
						<PortfolioVideo
							videoId={"IB2v9tw7q_g"}
						/>
					</div>
				</div>
			</section>
		);
	}
}

export default Portfolio;
