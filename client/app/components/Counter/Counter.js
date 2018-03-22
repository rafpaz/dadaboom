import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CounterBox from "./CounterBox";

class Counter extends Component {
	render() {
		return (
			<section className="counter-section text-center">
				<div id="counter" className="overlay">
					<div className="container">
						<div className="row text-center">
							<div className="col-md-12">
								<div className="projects">
									<div className="row">
										<CounterBox
											id={"border-left0"}
											to={"60"}
											text={"לקוחות מרוצים"}
										/>
										<CounterBox
											id={"border-left1"}
											to={"75"}
											text={"פרוייקטים"}
										/>
										<CounterBox
											id={"border-left2"}
											to={"659"}
											text={"שעות עבודה"}
										/>
										<CounterBox
											id={"border-left3"}
											to={"96"}
											text={"המלצות"}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* end container */}
				</div>
				{/* end overlay */}
			</section>
		);
	}
}

Counter.propTypes = {};

export default Counter;
