import styled from "styled-components";
import { colors } from "./globalStyle";
import { motion } from "framer-motion";

export const PreviousLinks = styled(motion.div)`
  width: 100%;
  margin-top: 6rem;
`;

export const LinksWrapper = styled(motion.ul)`
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

export const LinkItem = styled(motion.li)`
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

export const LongUrl = styled(motion.div)`
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

export const ShortenLink = styled(motion.div)`
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

export const ButtonWrapper = styled(motion.div)`
  padding: 0.2rem 1rem 1rem;

  @media (min-width: 768px) {
    padding: 0;
    margin-left: 1rem;
  }
`;

export const CopyButton = styled(motion.button)`
  background-color: ${colors.primary.cyan};
  width: 100%;
  font-size: 0.875rem;
  padding: 0.875rem 2rem;
  margin: 0;
  border: none;
  border-radius: 0.5rem;
  font-weight: 700;
  @media (min-width: 992px) {
    color: ${colors.neutral.white};
    margin-bottom: 0;
    &:first-of-type {
      margin-top: 0;
      margin-right: 1rem;
    }
  }
`;
