import { AnimatePresence } from "framer-motion";
import React from "react";
import { slideInLeft, slideInRight } from "../components/framer";
import { Button } from "../components/styled/commonStyles";
import {
  Container,
  H1,
  Illustration,
  Image,
  P,
  Typography,
  Wrapper,
} from "../components/styled/heroStyles";

const HomeHero = () => {
  return (
    <Container>
      <Wrapper>
        <Typography>
          <H1
          >
            More than just shorter links
          </H1>
          <P>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </P>
          <Button
            href="/get-started"
            pad="0.75rem 2.5rem"
            colorFill="color"
          >
            Get Started
          </Button>
        </Typography>
      </Wrapper>
      <Wrapper
      >
        <Illustration>
          <Image src="/illustration-working.svg" alt="illustration" />
        </Illustration>
      </Wrapper>
    </Container>
  );
};

export default HomeHero;
