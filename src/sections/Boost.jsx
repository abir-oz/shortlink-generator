import React from 'react';
import styled from 'styled-components';
import { Button } from '../styled/commonStyles';
import { colors } from '../styled/globalStyle';

const BoostContainer = styled.div`
  width: 100%;
  background-color: ${colors.primary.darkViolet};
  background-image: url('/bg-boost-mobile.svg');
  background-repeat: no-repeat;
  background-position: right;

  @media (min-width: 768px) {
    background-image: url('/bg-boost-desktop.svg');
  }
`;
const TextContainer = styled.div`
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

const Heading = styled.h3`
  color: ${colors.neutral.white};
  font-size: 1.7rem;
  font-weight: 700;
`;

const ButtonMod = styled(Button)`
  font-size: 1.375rem;

  @media (min-width: 768px) {
    padding: 0.875rem 2.5rem;
  }
`;

const Boost = () => {
  return (
    <BoostContainer>
      <TextContainer>
        <Heading>Boost your links today</Heading>
        <ButtonMod color="color" padding="0.875rem 2.5rem">
          Get Started
        </ButtonMod>
      </TextContainer>
    </BoostContainer>
  );
};

export default Boost;
