import React from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const onItemClick = () => {
  /* eslint-disable no-undef */
  $('#navbar-mobile').collapse('hide');
  /* eslint-enable no-undef */
};

const ItemNav = ({ item }) => (
  <li>
    <AnchorLink
      href={`#${item.target}`}
      className="section-link"
      onClick={onItemClick}
    >
      {item.name}
    </AnchorLink>
  </li>
);

ItemNav.propTypes = {
  item: PropTypes.shape({
    target: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemNav;
