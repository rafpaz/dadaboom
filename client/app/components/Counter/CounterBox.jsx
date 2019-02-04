import React from 'react';
import PropTypes from 'prop-types';
import { Number, CounterText, SingleProject } from './counterStyles';

const CounterBox = ({ to, text, border = false }) => (
  <div className="col-md-3 col-sm-6 col-xs-6">
    <SingleProject border={border}>
      <Number
        className="number"
        data-from="0"
        data-to={to}
        data-speed="6000"
        data-refresh-interval="100"
      >
        {to}
      </Number>
      <CounterText>{text}</CounterText>
    </SingleProject>
  </div>
);

CounterBox.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  border: PropTypes.bool,
};

CounterBox.defaultProps = {
  border: false,
};

export default CounterBox;
