import styled from "styled-components";
import { colors } from "./globalStyle";
import { motion } from "framer-motion";

const FooterContainer = styled(motion.div)`
  width: 100%;
  background-color: ${colors.neutral.veryDarkViolet};
  color: ${colors.neutral.white};
`;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 6rem 0;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 6rem 8rem;
  }
`;

// Logo
const Logo = styled(motion.div)`
  text-align: center;
  & img {
    width: 110px;
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

// Menus container
const MenusContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    margin-left: auto;
    gap: 5rem;
  }
`;

// Menu
const Menu = styled(motion.div)`
  margin: 1.5rem 0;

  @media (min-width: 768px) {
    margin: 0 2rem;
  }
`;

// Menu Title
const MenuTitle = styled(motion.h3)`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1.3rem;
`;

// List
const List = styled(motion.ul)``;

const Item = styled(motion.li)`
  margin-bottom: 0.7rem;
  font-size: 1rem;
  font-weight: 400;
  & a {
    color: ${colors.neutral.grayishViolet};

    &:hover {
      color: ${colors.neutral.white};
      text-decoration: underline;
    }
  }
`;

const SocialMedia = styled(motion.div)`
  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    & li {
      margin: 0 0.8rem;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      & a {
        & img {
          width: 20px;
        }
      }
    }

    @media (min-width: 768px) {
      margin-top: 0;
    }
  }
`;

export {
  FooterContainer,
  Wrapper,
  Logo,
  MenusContainer,
  Menu,
  MenuTitle,
  List,
  Item,
  SocialMedia,
};
