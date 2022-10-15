import React from 'react';
import { Button } from '../styled/commonStyles';
import {
  Container,
  H1,
  Illustration,
  Image,
  P,
  Typography,
  Wrapper,
} from '../styled/heroStyles';

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
          <Button
            as="a"
            href="/get-started"
            padding="0.75rem 2.5rem"
            color="color"
          >
            Get Started
          </Button>
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
