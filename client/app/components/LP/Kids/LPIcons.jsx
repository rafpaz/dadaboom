import React from 'react';
import PropTypes from 'prop-types';

const LPIcons = (props) => {
  const { url, text, alt } = props;
  return (
    <div className="col-xs-4 thin-margin">
      <img
        src={`https://res.cloudinary.com/dadaboom/image/upload/${url}`}
        className="img-responsive"
        alt={alt}
      />
      <div className="text-center">
        <span>
          {text}
        </span>
      </div>
    </div>
  );
};

LPIcons.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LPIcons;
