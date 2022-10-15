import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import { colors } from './globalStyle';

/**
 * Common Components
 */

// Main Container
export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2rem;

  @media (min-width: 992px) {
    padding: 2rem 8rem;
  }
`;

// Logo
export const Logo = styled.div`
  & a {
    & img {
      display: block;
      max-width: 70%;

      @media (min-width: 768px) {
        max-width: 100%;
      }
    }
  }

  @media (min-width: 768px) {
    margin-right: 3rem;
  }
`;

// Menu
export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 992px) {
    flex-direction: row;
    margin-right: auto;
  }
`;

// Menu Item
export const Item = styled.li`
  display: block;
  margin: 1rem;

  @media (min-width: 992px) {
    &:not(:last-of-type) {
      margin: 0 1rem 0 0;
    }
  }
`;

// Login and Sign Up Buttons
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid ${colors.neutral.grayishViolet};
  margin: 1rem 1.5rem;

  @media (min-width: 992px) {
    flex-direction: row;
    border: none;
    margin: 0 0 0 1.5rem;
  }
`;

/**
 * Desktop Navigation
 *
 **/

// Navigation Container
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: center;
  align-items: center;
`;

/**
 *
 * Mobile Navigation
 */

// Mobile Menu Toggler
export const Toggler = styled(FaBars)`
  position: absolute;
  right: 1rem;
  color: ${colors.neutral.gray};
`;

// Mobile Menu Container
export const MobileMenuContainer = styled.div`
  display: flex;
  position: absolute;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0 0;
  left: 1.5rem;
  right: 1.5rem;
  top: 4.5rem;
  background-color: ${colors.primary.darkViolet};
  z-index: 99999;
  color: ${colors.neutral.white};
  border-radius: 0.7rem;
  // reveal animation
  animation: reveal 0.5s ease-in-out;
  @keyframes reveal {
    0% {
      opacity: 0;
      transform: translateY(-3rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
`;
