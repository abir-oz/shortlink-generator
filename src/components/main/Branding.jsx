import { AnimatePresence, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  BrandDetails,
  BrandWrapper,
  Card,
  CardWrapper,
  Heading,
  HeadingMain,
  Icon,
  Paragraph,
} from "../styled/mainStyles";

import { cardData } from "../../../data/cardData";
import { cardVariant, slideInLeft, slideInRight } from "../framer";

function Branding() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <BrandWrapper>
      <BrandDetails>
        <HeadingMain
          variants={slideInLeft}
          initial="hidden"
          ref={ref}
          animate={controls}
        >
          Advanced Statistics
        </HeadingMain>
        <Paragraph
          variants={slideInRight}
          initial="hidden"
          ref={ref}
          animate={controls}
        >
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Paragraph>
      </BrandDetails>

      <CardWrapper>
        {cardData.map((card, index) => (
          <AnimatePresence key={(index + 1).toString()}>
            <Card
              custom={index * 0.5}
              variants={cardVariant}
              initial="hidden"
              ref={ref}
              animate={controls}
              exit="hidden"
              whileHover={{ scale: 1.03 }}
            >
              <Icon>
                <img src={card.icon} alt={card.iconAlt} />
              </Icon>
              <Heading>{card.heading}</Heading>
              <Paragraph>{card.paragraph}</Paragraph>
            </Card>
          </AnimatePresence>
        ))}
      </CardWrapper>
    </BrandWrapper>
  );
}

export default Branding;
