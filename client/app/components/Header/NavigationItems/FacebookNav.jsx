import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

const FacebookNav = ({ facebookLink }) => (
  <li>
    <a href={facebookLink} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebookF} />
    </a>
  </li>
);

FacebookNav.propTypes = {
  facebookLink: PropTypes.string.isRequired,
};

export default FacebookNav;
