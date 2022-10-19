import styled from "styled-components";
import { colors } from "./globalStyle";
import { motion } from "framer-motion";

// Brand details

export const BrandWrapper = styled(motion.div)`
  width: 100%;
  margin: 4rem 0;
`;

export const BrandDetails = styled(motion.div)`
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

export const HeadingMain = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.primary.darkViolet};

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Heading = styled(motion.h3)`
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

export const Paragraph = styled(motion.p)`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${colors.neutral.grayishViolet};

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 0 0.875rem;
  }
`;

export const CardWrapper = styled(motion.div)`
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

export const Card = styled(motion.div)`
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

export const Icon = styled(motion.div)`
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
