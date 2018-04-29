import React, {Component} from 'react';
import {Image, Transformation} from "cloudinary-react";
import PropTypes from 'prop-types';
import PostContent from "./PostContent";
import PostSidebar from "./SideBar/PostSidebar";

class PostSection extends Component {
	render() {
		return (
			<section id="blog">
				<div className="container">
					<div className="row">
						<div className="col-md-9 col-sm-12">
							<div className="row">
								<div className="col-sm-12 col-md-12">
									<div className="single-blog single-column">
										<div className="post-thumb">
											<Image
												cloudName="dadaboom"
												publicId="b2.jpg"
												className={"img-responsive"}
											/>
										</div>
										<PostContent
											title={"מערך שיעורים אופציונאלי לרצף האוטיסטי"}
											date={"7 באפריל 2018"}
										/>
									</div>
								</div>
							</div>
						</div>
						<PostSidebar/>
					</div>
				</div>
			</section>
		);
	}
}

PostSection.propTypes = {};

export default PostSection;
