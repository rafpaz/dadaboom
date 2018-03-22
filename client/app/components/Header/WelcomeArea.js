import React from 'react';
import TypedHeader from "./TypedHeader";

const WelcomeArea = () => (
	<div className="welcome-area">
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-right">
					<div className="social">
						<ul>
							<li>
								<a href="https://www.facebook.com/%D7%A6%D7%A4%D7%A8%D7%99%D7%A8-%D7%9C%D7%99%D7%9B%D7%98%D7%A0%D7%A9%D7%98%D7%99%D7%99%D7%9F-%D7%9C%D7%99%D7%9E%D7%95%D7%93-%D7%AA%D7%95%D7%A4%D7%99%D7%9D-%D7%95%D7%9B%D7%9C%D7%99-%D7%94%D7%A7%D7%A9%D7%94-365617346882919/" target={"_blank"}>
									<i className="fa fa-facebook" aria-hidden="true"/>
								</a>
							</li>
							<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"/></a></li>
							<li><a href="#"><i className="fa fa-instagram" aria-hidden="true"/></a></li>
							<li><a href="#"><i className="fa fa-pinterest-p" aria-hidden="true"/></a></li>
							<li><a href="#" style={{marginRight: 0}}><i className="fa fa-tumblr"
																		aria-hidden="true"/></a></li>
						</ul>
					</div>
				</div>
				<div className="col-md-12 text-right">
					<h2>צפריר ליכטנשטיין</h2>
				</div>
				<div className="col-md-12 text-right">
					<TypedHeader
						strings={[
							'בית ספר לתופים',
							'מתופף מקצועי',
							'מתמחה בעבודה עם ילדים'
						]}
					/>
				</div>
			</div>
			<div className="row text-right">
				<div className="col-md-12">
					<div className="welcome-scroll">
						<div className="arrow bounce">
							<a href="#about" className="section-link" data-target="about"><i
								className="fa fa-long-arrow-down fa-2x"/></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default WelcomeArea;
