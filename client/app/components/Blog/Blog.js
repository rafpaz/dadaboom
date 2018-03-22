import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BlogBox from "./BlogBox";

class Blog extends Component {
	render() {
		const defaultText = "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.";
		return (
			<section className="blogs-section" id="blogs">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="section-title">
								<h1>בלוג</h1>
							</div>
						</div>
					</div>
					<div className="row">
						<BlogBox
							title={"5 הסודות לחיים"}
							img={"b1"}
							alt={"סודות לחיים"}
							href={"5-secrects-to-life"}
							text={defaultText}
						/>
						<BlogBox
							title={"תלמידים בעלי קשיי למידה"}
							img={"b2"}
							alt={"קשיי למידה"}
							href={"study-difficulties"}
							text={defaultText}
						/>
						<BlogBox
							title={"על הרצף האוטיסטי"}
							img={"b3"}
							alt={"רצף אוטיסטי"}
							href={"autism"}
							text={defaultText}
						/>
					</div>
				</div>
				{/* end container */}
			</section>
		);
	}
}

Blog.propTypes = {};

export default Blog;
