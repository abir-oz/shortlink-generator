import React, { useEffect, useState } from 'react';
import { Anchor, Button } from '../styled/commonStyles';
import {
  Buttons,
  Container,
  Item,
  Logo,
  Menu,
  MobileMenuContainer,
  Nav,
  Toggler,
} from '../styled/headerStyles';

const MENUITEMS = ['Features', 'Pricing', 'Resources'];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // toggle mobile menu
  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  useEffect(() => {
    // if screen is greater than 768px, show the navigation

    const showNav = () => {
      if (window.innerWidth > 990) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };
    showNav();
    window.addEventListener('resize', showNav);

    return () => {
      window.removeEventListener('resize', showNav);
    };
  }, []);

  useEffect(() => {
    const closeMenu = (e) => {
      if (
        showMobileMenu &&
        !e.target.closest('#mobile-menu') &&
        !e.target.closest('#toggler')
      ) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [showMobileMenu]);

  return (
    <Container>
      {showMenu ? (
        <Nav>
          <Logo>
            <Anchor href="/">
              <img src="/logo.svg" alt="logo" />
            </Anchor>
          </Logo>
          <Menu>
            {MENUITEMS.map((item, index) => (
              <Item key={index}>
                <Anchor href={item.toLowerCase()}>{item}</Anchor>
              </Item>
            ))}
          </Menu>

          <Buttons>
            <Button as="a" href="/login">
              Login
            </Button>
            <Button padding="0.7rem 2rem" color="color" as="a" href="/sign-up">
              Sign Up
            </Button>
          </Buttons>
        </Nav>
      ) : (
        <>
          <Logo>
            <Anchor href="/">
              <img src="/logo.svg" alt="logo" />
            </Anchor>
          </Logo>
          <Toggler id="toggler" onClick={toggleMenu} />
        </>
      )}
      {showMobileMenu && (
        <MobileMenuContainer>
          <Menu id="mobile-menu">
            {MENUITEMS.map((item, index) => (
              <Item key={index}>
                <Anchor href={item.toLowerCase()}>{item}</Anchor>
              </Item>
            ))}
          </Menu>
          <Buttons>
            <Button as="a" href="/login">
              Login
            </Button>
            <Button padding="0.7rem 7rem" color="color" as="a" href="/sign-up">
              Sign Up
            </Button>
          </Buttons>
        </MobileMenuContainer>
      )}
    </Container>
  );
};

export default Header;
