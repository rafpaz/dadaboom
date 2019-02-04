import React from 'react';
import Typed from 'react-typed';
import PropTypes from 'prop-types';

const TypedHeader = ({ strings }) => (
  <div className="typed-container">
    <Typed
      strings={strings}
      typeSpeed={70}
      startDelay={1200}
      backSpeed={40}
      backDelay={500}
      loop
      loopCount={5}
      showCursor={false}
      cursorChar="|"
      attr={null}
      contentType="html"
      smartBackspace={false}
    />
  </div>
);

TypedHeader.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default TypedHeader;
