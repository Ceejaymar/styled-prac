import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid #fa049c;
  border-radius: 50%;
  border-top: none;
  margin: 16px auto;
  animation: ${rotation} .7s linear infinite;
`;

export { Spinner };