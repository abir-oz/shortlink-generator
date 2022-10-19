import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "./globalStyle";

export const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  margin-bottom: 8rem;
  overflow-x: hidden;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Wrapper = styled(motion.div)`
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Typography = styled(motion.div)`
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    padding: 0 1rem 0 8rem;
  }
`;

export const H1 = styled(motion.h1)`
  color: ${colors.neutral.veryDarkBlue};
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  font-weight: 700;

  @media (min-width: 992px) {
    font-size: 3rem;
  }

  @media (min-width: 1440px) {
    font-size: 4.5rem;
  }
`;

export const P = styled(motion.p)`
  font-size: 1rem;
  color: ${colors.neutral.grayishViolet};

  @media (min-width: 992px) {
    margin-bottom: 1rem;
  }

  @media (min-width: 1440px) {
    font-size: 1.5rem;
  }
`;

export const Illustration = styled(motion.div)`
  width: 100%;
  height: 50vh;
  position: relative;
  margin: 1.5rem 0;

  @media (min-width: 425px) {
    height: 55vh;
  }

  @media (min-width: 768px) {
    height: 65vh;
  }
`;

export const Image = styled(motion.img)`
  width: 500px;
  position: absolute;
  left: 8%;

  @media (min-width: 425px) {
    width: 550px;
  }

  @media (min-width: 768px) {
    width: 400px;
    left: 8%;
  }

  @media (min-width: 992px) {
    width: 550px;
  }

  @media (min-width: 1440px) {
    width: 780px;
    left: 10%;
  }
`;
