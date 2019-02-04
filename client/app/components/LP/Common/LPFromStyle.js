import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export default styled.div`
  border: 5px solid #f3f3f3; /* Light grey */  
  border-top: 5px solid #763d5d; /* Blue */
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  animation: ${spin} 1s linear infinite;
  margin: 5px auto;
`;
