import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 10%;
  align-self: flex-end;
  text-align: center;
  margin: 0px auto 0 0;
  @media (max-width: 700px) {
    width: 100%;
    margin-top: 10px;
    text-align:left;  
  }
`;

const ToRead = () => (
  <Container><b>לקריאה</b></Container>
);

export default ToRead;
