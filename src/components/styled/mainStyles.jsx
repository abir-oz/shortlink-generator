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

// Clipboard

export { MainContainer, FormWrapper, Form, Input, Button, ErrorMsg };
