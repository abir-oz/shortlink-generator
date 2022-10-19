import styled from "styled-components";
import { colors } from "./globalStyle";
import { motion } from "framer-motion";
import { Button } from "./commonStyles";

const BoostContainer = styled(motion.div)`
  width: 100%;
  background-color: ${colors.primary.darkViolet};
  background-image: url("/bg-boost-mobile.svg");
  background-repeat: no-repeat;
  background-position: right;

  @media (min-width: 768px) {
    background-image: url("/bg-boost-desktop.svg");
  }
`;
const TextContainer = styled(motion.div)`
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

const Heading = styled(motion.h2)`
  color: ${colors.neutral.white};
  font-size: 1.7rem;
  font-weight: 700;
`;

const ButtonMod = styled(Button)`
  font-size: 1.375rem;
  background-color: ${colors.primary.cyan};
  color: ${colors.neutral.white};
  @media (min-width: 768px) {
    padding: 0.875rem 2.5rem;
  }
`;

export { BoostContainer, TextContainer, Heading, ButtonMod };
