import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex, Icon, Text } from 'components';
import Link from 'next/link';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const StyledNav = styled.nav`
  background: ${p => p.theme.gradients.nav};
  height: 110px;
  padding: 0 ${p => p.theme.layout.sideMargin.desktop.sm};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    align-items: flex-start;
    height: ${p => (p.menuIsOpen ? '100vh' : '70px')};
  }
  transition: height 0.2s;
`;

const Logo = styled.div`
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${p => p.theme.layout.sideMargin.desktop.sm};
  img {
    height: 25px;
  }
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    padding: 0 ${p => p.theme.layout.sideMargin.mobile.sm};
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 22px;
  }
`;

const MenuButtonOuter = styled.button`
  position: absolute;
  right: ${p => p.theme.layout.sideMargin.mobile.sm};
  top: 24px;
  height: 22px;
  width: 28px;
  padding: 11px;
  .one {
    transform-origin: right;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${p => p.theme.colors.white};
    height: 2px;
    width: 28px;
    transform: ${p => (p.menuIsOpen ? 'rotate(-45deg)' : 'none')};
    transition: transform 0.2s, background-color 0.2s;
  }
  .two {
    position: absolute;
    top: calc(2px + 8px);
    left: 0;
    background-color: ${p => p.theme.colors.white};
    height: 2px;
    width: 28px;
    transform: ${p => (p.menuIsOpen ? 'translateX(-16px)' : 'none')};
    opacity: ${p => (p.menuIsOpen ? 0 : 1)};
    transition: transform 0.2s, opacity 0.2s;
  }
  .three {
    transform-origin: right;

    position: absolute;
    top: calc(2px + 2px + 8px + 8px);
    left: 0;
    background-color: ${p => p.theme.colors.white};
    height: 2px;
    width: 28px;
    transform: ${p => (p.menuIsOpen ? 'rotate(45deg)' : 'none')};
    transition: transform 0.2s, background-color 0.2s;
  }
  display: none;
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    display: block;
  }
`;

const MenuButton = ({ ...props }) => (
  <MenuButtonOuter {...props}>
    <div className="one" />
    <div className="two" />
    <div className="three" />
  </MenuButtonOuter>
);

const StyledLink = styled.a`
  color: rgba(255, 255, 255, 0.55);
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.25px;
  margin: 0 16px;
  text-align: center;
  s &:hover {
    color: rgba(255, 255, 255, 1);
  }

  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    margin: 20px 0;
  }
  transition: 0.2s color;
`;

const NavLink = ({ href, as, children, ...props }) => (
  <Link href={href} as={as} passHref prefetch>
    <StyledLink {...props}>{children}</StyledLink>
  </Link>
);

const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: ${p => p.theme.maxWidths.default};
  min-width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    padding-top: 70px;
    height: calc(100%-70px);
    flex-direction: column;
    justify-content: flex-start;
    display: flex;
  }
`;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const StyledShoppingBasket = styled.span`
  color: rgba(255, 255, 255, 0.55);
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
  font-weight: 700;
  transition: 0.2s color;
`;

const ShoppingBasket = props => (
  <StyledShoppingBasket>
    <Link passHref href="/">
      <a>
        <Icon icon={['far', 'shopping-bag']} />
        <Text ml="9px" as="span">
          {props.number}
        </Text>
      </a>
    </Link>
  </StyledShoppingBasket>
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Nav = () => {
  const [menuIsOpen, setMenu] = useState(true);
  const openMenu = () => setMenu(true);
  const closeMenu = () => setMenu(false);
  const toggleMenu = () => setMenu(!menuIsOpen);
  return (
    <StyledNav menuIsOpen={menuIsOpen}>
      <Logo>
        <img src="/static/logo_header.png" alt="logo" />
      </Logo>
      <NavLinkContainer menuIsOpen={menuIsOpen}>
        <Flex flexDirection={{ lg: 'row', _: 'column' }} ml="-16px">
          <NavLink href="/">home</NavLink>
          <NavLink href="/">history</NavLink>
          <NavLink href="/">liquor store</NavLink>
          <NavLink href="/">shop</NavLink>
        </Flex>

        <Flex flexDirection={{ lg: 'row', _: 'column' }}>
          <NavLink href="/">contact</NavLink>
          <NavLink href="/">login</NavLink>
          <ShoppingBasket number="0" />
        </Flex>
      </NavLinkContainer>
      <MenuButton onClick={toggleMenu} menuIsOpen={menuIsOpen} />
    </StyledNav>
  );
};

export default Nav;
