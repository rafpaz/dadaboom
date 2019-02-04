import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

const FooterArea = styled.footer`
  background-color: #ffffff;
  padding: 30px 0;
`;

const FooterText = styled.p`
  color: #555555;
  letter-spacing: 1px;
  margin: 0 0 0;
  opacity: 1;
`;

const Footer = () => (
  <FooterArea>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="footer-text text-center">
            <ScrollAnimation
              animateIn="fadeInUp"
              offset={10}
              animateOnce
            >
              <FooterText>Rafael Paz © Copyright 2017 All Right Reserved</FooterText>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  </FooterArea>
);

export default Footer;
