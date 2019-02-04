import React from 'react';
import PropTypes from 'prop-types';
import { Image, Transformation } from 'cloudinary-react';

const BlogBox = ({
  href, img, title, text,
}) => (
  <div className="col-sm-4 col-xs-12" style={{ float: 'right' }}>
    <div className="blog-item">
      <div className="blog-img">
        <a href={`/blog/${href}`}>
          <Image
            cloudName="dadaboom"
            publicId={img}
            className="img-responsive"
          >
            <Transformation width="360" crop="scale" />
          </Image>
        </a>
      </div>
      <div className="blog-content">
        <div className="blog-content-head">
          <h3 className="blog-content-title">
            <a href={`/blog/${href}`}>
              {title}
            </a>
          </h3>
        </div>
        <div className="blog-content-desc">
          <p>{text}</p>
        </div>
        <div className="blog-content-footer">
          <a href={`/blog/${href}`}>
            <span>קרא עוד</span>
            <i className="fa fa-long-arrow-alt-left" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

BlogBox.propTypes = {
  href: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default BlogBox;
