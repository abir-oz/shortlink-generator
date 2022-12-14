import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colors } from './globalStyle';

const mobileFont = '0.875rem';
const fontWeight = 700;

export const Anchor = styled(motion.a)`
  color: ${colors.neutral.white};
  font-size: ${mobileFont};
  font-weight: ${fontWeight};
  &:hover {
    color: ${colors.neutral.gray};
  }

  @media (min-width: 992px) {
    color: ${colors.neutral.gray};
    &:hover {
      color: ${colors.primary.darkViolet};
    }
  }
`;

export const Button = styled(motion.a)`
  font-size: ${mobileFont};
  font-weight: ${fontWeight};
  display: inline-block;
  border-radius: 3rem;
  color: ${colors.neutral.white};
  margin-bottom: 1rem;
  border: none;
  &:hover {
    opacity: 0.6;
  }
  &:first-of-type {
    margin-top: 1rem;
  }

  @media (min-width: 992px) {
    color: ${colors.neutral.veryDarkViolet};
    margin-bottom: 0;
    &:first-of-type {
      margin-top: 0;
      margin-right: 1rem;
    }
  }
`;
