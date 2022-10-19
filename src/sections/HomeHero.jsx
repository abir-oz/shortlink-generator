import React from "react";
import styled from "styled-components";
import { Button } from "../components/styled/commonStyles";
import { colors } from "../components/styled/globalStyle";
import {
  Container,
  H1,
  Illustration,
  Image,
  P,
  Typography,
  Wrapper,
} from "../components/styled/heroStyles";

const HeroButton = styled(Button)`
  padding: 0.75rem 2.5rem;
  background-color: ${colors.primary.cyan};
  color: ${colors.neutral.white};
`;

const HomeHero = () => {
  return (
    <Container>
      <Wrapper>
        <Typography>
          <H1>More than just shorter links</H1>
          <P>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </P>
          <HeroButton href="/get-started">Get Started</HeroButton>
        </Typography>
      </Wrapper>
      <Wrapper>
        <Illustration>
          <Image src="/illustration-working.svg" alt="illustration" />
        </Illustration>
      </Wrapper>
    </Container>
  );
};

export default HomeHero;
