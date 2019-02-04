import styled from 'styled-components';

export const SignInForm = styled.form`
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
`;

export const SignInHeader = styled.h2`
  margin-bottom: 10px;
`;

const FormInput = styled.input`
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
  &:focus {
    z-index: 2;
  }
`;

export const InputEmail = styled(FormInput)`
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`;

export const InputPassword = styled(FormInput)`
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const NotMember = styled.p`
  margin-top: 10px;
`;
