import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { boostVar, slideInLeft, slideInRight } from "../components/framer";
import {
  BoostContainer,
  ButtonMod,
  Heading,
  TextContainer,
} from "../components/styled/boostStyles";

const Boost = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <BoostContainer
      initial="hidden"
      animate={controls}
      ref={ref}
      variants={boostVar}
    >
      <TextContainer>
        <Heading
          initial="hidden"
          animate={controls}
          ref={ref}
          variants={slideInLeft}
        >
          Boost your links today
        </Heading>
        <ButtonMod
          initial="hidden"
          animate={controls}
          ref={ref}
          variants={slideInRight}
          colorFill="color"
          pad="0.875rem 2.5rem"
        >
          Get Started
        </ButtonMod>
      </TextContainer>
    </BoostContainer>
  );
};

export default Boost;
