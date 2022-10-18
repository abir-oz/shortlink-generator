import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "./globalStyle";

// Main Container
const MainContainer = styled(motion.div)`
  background-color: ${colors.neutral.grayBg};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

// Form Part
const FormWrapper = styled(motion.div)`
  position: absolute;
  top: -5.25rem;
  right: 1.5rem;
  left: 1.5rem;
  background-color: ${colors.primary.darkViolet};
  border-radius: 0.7rem;
  background-image: url("/bg-shorten-mobile.svg");
  background-repeat: no-repeat;
  background-position: right top;
  margin-bottom: 8rem;

  @media (min-width: 768px) {
    top: -4.5rem;
    right: 8rem;
    left: 8rem;
    background-image: url("/bg-shorten-desktop.svg");
    background-position: right top;
  }
`;

const Form = styled(motion.form)`
  padding: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 3rem;
  }
`;

const Input = styled(motion.input)`
  width: 100%;
  border: ${(props) =>
    props.error ? `2px solid ${colors.secondary.red}` : "none"};
  border-radius: 0.3rem;
  padding: 1rem;
  font-size: 1rem;
  position: relative;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${(props) =>
      props.error ? colors.secondary.red : colors.neutral.grayishViolet};
    font-size: 1rem;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    width: 82%;
    margin-right: 1rem;
  }
`;

const ErrorMsg = styled.p`
  color: ${colors.secondary.red};
  font-size: 0.8rem;
  margin-top: 0.5rem;
  position: absolute;
  bottom: 1.2rem;
  left: 3rem;
  font-style: italic;
`;

const Button = styled(motion.button)`
  width: 100%;
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem;
  color: ${colors.neutral.white};
  margin-top: 1rem;
  border-radius: 0.3rem;
  background-color: ${colors.primary.cyan};
  border: none;

  &:hover {
    cursor: pointer;
    background-color: rgb(158, 246, 246);
  }

  @media (min-width: 768px) {
    width: 15%;
    margin-top: 0;
  }
`;

// Brand details

const BrandWrapper = styled(motion.div)`
  width: 100%;
  margin: 4rem 0;
`;

const BrandDetails = styled(motion.div)`
  padding: 1.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 1rem 8rem;

    & p {
      width: 50%;
      font-size: 1.2rem;
    }
  }
`;

// Cards

const HeadingMain = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.primary.darkViolet};

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Heading = styled(motion.h3)`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${colors.primary.darkViolet};
  margin: 0;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    padding: 0 0.875rem;
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${colors.neutral.grayishViolet};

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 0 0.875rem;
  }
`;

const CardWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 4rem 0 6rem;
  width: 100%;
  padding: 2rem 1.375rem;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 8rem;
    gap: 2rem;
  }
`;

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 5rem 2.5rem 3rem;
  border-radius: 0.5rem;
  background-color: ${colors.neutral.white};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  z-index: 1;
  margin-bottom: 5rem;
  height: 280px;

  &:not(:last-child) {
    &::before {
      content: "";
      position: absolute;
      bottom: -5rem;
      left: 50%;
      transform: translateX(-50%);
      width: 0.375rem;
      height: 5rem;
      background-color: ${colors.primary.cyan};
      z-index: -111;

      @media (min-width: 768px) {
        display: none;
      }
    }
  }

  @media (min-width: 768px) {
    text-align: left;
    &:not(:last-child) {
      &::after {
        @media (min-width: 768px) {
          content: "";
          position: absolute;
          right: -3rem;
          bottom: 40%;
          transform: translateY(-40%);
          width: 3rem;
          height: 0.375rem;
          background-color: ${colors.primary.cyan};
          z-index: -111;
          display: block;
        }
      }
    }

    &:nth-child(2) {
      margin-top: 3.5rem;
      &::after {
        transform: translateY(-3.5rem);
      }
    }

    &:nth-child(3) {
      margin-top: 7rem;
    }
  }
`;

const Icon = styled(motion.div)`
  position: absolute;
  top: -2.5rem;
  left: 50%;
  width: 5.375rem;
  height: 5.375rem;
  transform: translateX(-50%);
  background-color: ${colors.primary.darkViolet};
  border-radius: 50%;
  padding: 1.5rem;

  & img {
    width: 2.5rem;
    height: 2.5rem;
    // place the image in the center
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 768px) {
    top: -2.875rem;
    left: 15%;
    transform: translateX(-15%);
  }
`;

// Clipboard

const PreviousLinks = styled(motion.div)`
  width: 100%;
  margin-top: 6rem;
`;

const LinksWrapper = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.375rem;
  font-size: 1rem;
  color: ${colors.primary.darkViolet};
  font-weight: 700;
  gap: 1.5rem;

  @media (min-width: 768px) {
    padding: 1rem 8rem;
  }
`;

const LinkItem = styled(motion.li)`
  width: 100%;
  border-radius: 0.5rem;
  background-color: ${colors.neutral.white};
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    gap: 3rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
`;

const LongUrl = styled(motion.div)`
  & a {
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;
    display: block;
    padding: 1rem 1rem 0;
    text-decoration: none;
    color: ${colors.primary.darkViolet};

    @media (min-width: 768px) {
      padding: 0;
      margin: 0;
    }
  }
`;

const ShortenLink = styled(motion.div)`
  & a {
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;
    display: block;
    padding: 0 1rem 0.5rem;
    text-decoration: none;
    color: ${colors.primary.cyan};

    @media (min-width: 768px) {
      padding: 0;
      margin-left: auto;
    }
  }

  //separator
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${colors.neutral.gray};
    opacity: 0.5;
    margin: 0.5rem 0;
  }

  @media (min-width: 768px) {
    padding: 0;
    margin-left: auto;
    &::before {
      display: none;
    }
  }
`;

const ButtonWrapper = styled(motion.div)`
  padding: 0.2rem 1rem 1rem;

  @media (min-width: 768px) {
    padding: 0;
    margin-left: 1rem;
  }
`;

const CopyButton = styled(Button)`
  background-color: ${({ copied }) =>
    copied ? colors.primary.darkViolet : colors.primary.cyan};
  width: 100%;
  font-size: 0.875rem;
  padding: 0.875rem 2rem;
  margin: 0;
`;

export {
  MainContainer,
  FormWrapper,
  Form,
  Input,
  Button,
  BrandWrapper,
  BrandDetails,
  HeadingMain,
  Heading,
  Paragraph,
  CardWrapper,
  Card,
  Icon,
  LongUrl,
  ShortenLink,
  ButtonWrapper,
  CopyButton,
  ErrorMsg,
  PreviousLinks,
  LinksWrapper,
  LinkItem,
};
