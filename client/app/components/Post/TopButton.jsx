import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const fadein = keyframes`
  from {opacity: 0}
  to { opacity: 1}
`;

const fadeout = keyframes`
  from {opacity: 1}
  to { opacity: 0}
`;

const Top = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  content: "";
  border-color: transparent transparent #d6b161 transparent;
  border-width: 15px;
  border-style: solid;
  z-index: 0;
  display: none;
  &.show-top {
    opacity: 1;
    display: block;
    animation: ${fadein} 1s;
  }
  &.hide-top {
    animation: ${fadeout} 1s;
    opacity: 0;
    display: block;
  }
`;

class TopButton extends Component {
  state = {
    show: false,
    init: true,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.showArrow);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.showArrow);
  }

  showArrow = () => {
    const { show } = this.state;
    if (window.scrollY >= 400 && !show) {
      this.setState({
        show: true,
        init: false,
      });
    } else if (window.scrollY < 400 && show) {
      this.setState({
        show: false,
        init: false,
      });
    }
  };

  getClassName = (init, show) => {
    if (init) return '';
    if (show) return 'show-top';
    return 'hide-top';
  };

  render() {
    const { init, show } = this.state;
    const name = this.getClassName(init, show);
    return (
      <>
        <AnchorLink href="#blog-top-header">
          <Top
            className={name}
          />
        </AnchorLink>
      </>
    );
  }
}

export default TopButton;
