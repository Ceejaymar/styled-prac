import styled, { css } from 'styled-components';

const Button = styled.button`
  color: white;
  background: ${({ secondary, theme }) => secondary ? theme.secondary : theme.primaryColor};
  font-weight: bold;
  ${({ large }) => large ? css`
    padding: 10px;
    border-radius: 5px;
    font-size: 1.5em;
  ` : css`
    padding: 8px;
    border-radius: 4px;
    box-shadow: none;
    font-size: 1em;
  `}
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #665;
  }
`;

export { Button };