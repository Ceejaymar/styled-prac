import React from "react";
import styled from "styled-components";
import { Input } from "./Input";

const PasswordInputWrapper = styled.div`
  display: flex;

  ~div {
    margin-bottom: 8px;
  }
`;

const PasswordInputStyled = styled(Input).attrs(() => ({ // since we know this input will always need these attributes
  type: 'password',
  placeholder: 'Password'
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0px;
`;

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  padding: 8px;
  background: white;
  cursor: pointer;
  user-select: none;
  color: black;
  width: 60px;
`

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <>
      <PasswordInputWrapper>
        <PasswordInputStyled {...props} />
        <ToggleButton onClick={() => setShowPassword(s => !s)}>
          {showPassword ? 'Hide' : 'Show'}
        </ToggleButton>
      </PasswordInputWrapper>
      <div>
        {showPassword ? props.value : ''}
      </div>
    </>
  );
}

export { PasswordInput };