import React, { Component } from 'react';
import Typed from 'react-typed';
import PropTypes from 'prop-types';

class TypedHeader extends Component {
  render() {
    return (
      <div>
        <Typed
          strings={this.props.strings}
          typeSpeed={70}
          startDelay={1200}
          backSpeed={40}
          backDelay={500}
          loop={true}
          loopCount={5}
          showCursor={false}
          cursorChar={"|"}
          attr={null}
          contentType={'html'}
          smartBackspace={false}
        />
      </div>
    );
  }
}

TypedHeader.propTypes = {
    strings: PropTypes.array
};


export default TypedHeader;
