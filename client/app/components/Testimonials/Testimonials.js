import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TestimonialBox from "./TestimonialBox";

class Testimonials extends Component {
	render() {
		const defaultText = "צפריר הוא המורה הכי טוב בעולם. ממליץ בחום! " +
								"עוד טקסט ועוד ועוד ועוד ועוד ועוד ועוד ועוד ועוד ועוד ועוד ועוד ועוד" +
								"עוד טקסט ועוד ועוד ועוד ועוד ועוד ועוד ועוד ועוד ועוד ועוד ועוד ועוד" +
								"עוד טקסט ועוד ועוד ועוד ועוד ועוד ועוד ועוד ועוד ועוד ועוד ועוד ועוד" +
								"עוד טקסט ועוד ועוד ועוד ועוד ועוד ועוד ועוד ועוד ועוד ועוד ועוד ועוד";
		return (
			<section className="testimonials-section" id="testimonials">
				<div className="container">
					<div className="row">
						<div className="col-md-1"/>
						<div className="col-md-10">
							<div className="carousel slide" data-ride="carousel" id="quote-carousel">
								{/* Bottom Carousel Indicators */}
								<ol className="carousel-indicators">
									<li data-target="#quote-carousel" data-slide-to="0"/>
									<li data-target="#quote-carousel" data-slide-to="1" className="active"/>
									<li data-target="#quote-carousel" data-slide-to="2"/>
								</ol>
								{/* Carousel Slides / Quotes */}
								<div className="carousel-inner">
									{/* Quote 1 */}
									<TestimonialBox
										name={"רפאל פז"}
										text={defaultText}
									/>
									{/* Quote 2 */}
									<TestimonialBox
										name={"עופרי גונן"}
										text={defaultText}
										active={1}
									/>
									{/* Quote 3 */}
									<TestimonialBox
										name={"ניר לוי"}
										text={defaultText}
									/>
								</div>
							</div>
						</div>
						<div className="col-md-1"/>
					</div>
				</div>
				{/* end container */}
			</section>
		);
	}
}

export default Testimonials;
