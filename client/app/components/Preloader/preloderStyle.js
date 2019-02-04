import styled, { keyframes } from 'styled-components';

const PageLoading = styled.div`
  background-color: #ffffff;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9999;
`;

const load = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  background: #d6b161;
  border-radius: 50%;
  height: 40px;
  left: 50%;
  margin-left: -23px;
  margin-top: -14px;
  position: absolute;
  top: 48%;
  width: 40px;
  animation: ${load} 0.75s linear infinite;

  &:after {
    content: '';
    position: absolute;
    width: 37px;
    height: 36px;
    top: 1px;
    right: 0;
    left: 0;
    margin: auto;
    background: #ffffff;
    border-radius: 50%;
  }
`;

export {
  PageLoading, Loader,
};
