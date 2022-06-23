import React from 'react';
import styled from 'styled-components';
import { Link as DomLink, useLocation } from 'react-router-dom';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
`;

const Menu = styled.nav`
  display: flex;
  position: relative;
  width: initial;
  border-bottom: none;
  margin: auto 0 auto auto;
  font-family: 'Open Sans';
  left: initial;
  top: initial;
`;

const Link = ({ isActive, children, ...props }) => {
  return (
    <DomLink {...props}>
      {children}
    </DomLink>
  )
}

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${({ isActive }) => isActive ? 'bold' : 'normal'};
`;

const Header = () => {
  const { pathname } = useLocation();

  return (
    <HeaderWrapper>
      <Menu>
        <StyledLink to='/' isActive={pathname === '/'}>Home</StyledLink>
        <StyledLink to='/login' isActive={pathname === '/login'}>Login</StyledLink>
      </Menu>
    </HeaderWrapper>
  )
}

export default Header;