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
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            custom={1 * 0.2}
            key="hero-heading"
          >
            More than just shorter links
          </H1>
          <P
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            custom={4 * 0.2}
            key="hero-paragraph"
          >
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </P>
          <Button
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            href="/get-started"
            padding="0.75rem 2.5rem"
            color="color"
            custom={6 * 0.2}
            key="hero-button"
          >
            Get Started
          </Button>
        </Typography>
      </Wrapper>
      <Wrapper
        variants={slideInRight}
        initial="hidden"
        animate="visible"
        custom={0.5}
      >
        <Illustration>
          <Image src="/illustration-working.svg" alt="illustration" />
        </Illustration>
      </Wrapper>
    </Container>
  );
};

export default HomeHero;
