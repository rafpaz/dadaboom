import React from 'react';
import PropTypes from 'prop-types';

const TestimonialBox = (props) => {
  const { active, text, name } = props;
  return (
    <div className={`item${active > 0 ? ' active' : ''}`}>
      <div className="row">
        <div className="col-sm-12">
          <blockquote>
            <p>{`"${text}"`}</p>
          </blockquote>
          <h5>{name}</h5>
        </div>
      </div>
    </div>
  );
};

TestimonialBox.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.number,
};

TestimonialBox.defaultProps = {
  active: 0,
};

export default TestimonialBox;
