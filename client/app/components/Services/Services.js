import React, {Component} from 'react';
import ServiceBox from './ServiceBox';

class Services extends Component {
	render() {
		const defaultText = "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום " +
			"סילקוף, מרגשי ומרגשח. עמחליף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח " +
			"לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך.";
		return (
			<section id="services" className="services-section">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="section-title">
								<h1>שירותים</h1>
							</div>
						</div>
					</div>
					<div className="row">
						<ServiceBox
							title={"לימוד תופים"}
							icon={"fa-diamond"}
							text={defaultText}
						/>
						<ServiceBox
							title={"עבודה עם הרצף האוטיסטי"}
							icon={"fa-bar-chart"}
							text={defaultText}
						/>
					</div>
				</div>
				{/* end container */}
			</section>
		);
	}
}

export default Services;
