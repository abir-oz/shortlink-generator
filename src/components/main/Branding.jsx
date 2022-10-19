import React from "react";
import {
  BrandDetails,
  BrandWrapper,
  Card,
  CardWrapper,
  Heading,
  HeadingMain,
  Icon,
  Paragraph,
} from "../styled/brandStyles";

import { cardData } from "../../../data/cardData";

function Branding() {
  return (
    <BrandWrapper>
      <BrandDetails>
        <HeadingMain>Advanced Statistics</HeadingMain>
        <Paragraph>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Paragraph>
      </BrandDetails>

      <CardWrapper>
        {cardData.map((card, index) => (
          <Card key={index}>
            <Icon>
              <img src={card.icon} alt={card.heading} />
            </Icon>
            <Heading>{card.heading}</Heading>
            <Paragraph>{card.paragraph}</Paragraph>
          </Card>
        ))}
      </CardWrapper>
    </BrandWrapper>
  );
}

export default Branding;
