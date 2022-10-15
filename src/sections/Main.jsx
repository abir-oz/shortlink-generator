import React from 'react';
import {
  BrandDetails,
  BrandWrapper,
  Button,
  ButtonWrapper,
  Card,
  CardWrapper,
  Clip,
  ClipBoard,
  ClipWrapper,
  CopyButton,
  Form,
  FormWrapper,
  Heading,
  HeadingMain,
  Icon,
  Input,
  LongUrl,
  MainContainer,
  Paragraph,
  ShortenLink,
} from '../styled/mainStyles';

const MainSection = () => {
  return (
    <MainContainer>
      <FormWrapper>
        <Form action="">
          <Input type="url" placeholder="Shorten a link here..." />
          <Button>Shorten it!</Button>
        </Form>
      </FormWrapper>
      <ClipBoard>
        <ClipWrapper>
          <Clip>
            <LongUrl>
              <a href="https://www.frontendmentor.io/challenges">
                https://www.frontendmentor.io/challenges
              </a>
            </LongUrl>
            <ShortenLink>
              <a href="https://rel.ink/9b9V3l" target="_blank">
                https://rel.ink/9b9V3l
              </a>
            </ShortenLink>
            <ButtonWrapper>
              <CopyButton>Copy</CopyButton>
            </ButtonWrapper>
          </Clip>
          <Clip>
            <LongUrl>
              <a href="https://www.frontendmentor.io/challenges">
                https://www.frontendmentor.io/challenges
              </a>
            </LongUrl>
            <ShortenLink>
              <a href="https://rel.ink/9b9V3l" target="_blank">
                https://rel.ink/9b9V3l
              </a>
            </ShortenLink>
            <ButtonWrapper>
              <CopyButton>Copy</CopyButton>
            </ButtonWrapper>
          </Clip>
          <Clip>
            <LongUrl>
              <a href="https://www.frontendmentor.io/challenges">
                https://www.frontendmentor.io/challenges
              </a>
            </LongUrl>
            <ShortenLink>
              <a href="https://rel.ink/9b9V3l" target="_blank">
                https://rel.ink/9b9V3l
              </a>
            </ShortenLink>
            <ButtonWrapper>
              <CopyButton>Copy</CopyButton>
            </ButtonWrapper>
          </Clip>
        </ClipWrapper>
      </ClipBoard>
      <BrandWrapper>
        <BrandDetails>
          <HeadingMain>Advanced Statistics</HeadingMain>
          <Paragraph>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </Paragraph>
        </BrandDetails>

        <CardWrapper>
          <Card>
            <Icon>
              <img src="/icon-brand-recognition.svg" alt="icon" />
            </Icon>
            <Heading>Brand Recognition</Heading>
            <Paragraph>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </Paragraph>
          </Card>
          <Card>
            <Icon>
              <img src="/icon-detailed-records.svg" alt="icon" />
            </Icon>
            <Heading>Detailed Records</Heading>
            <Paragraph>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </Paragraph>
          </Card>
          <Card>
            <Icon>
              <img src="/icon-fully-customizable.svg" alt="icon" />
            </Icon>
            <Heading>Fully Customizable</Heading>
            <Paragraph>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </Paragraph>
          </Card>
        </CardWrapper>
      </BrandWrapper>
    </MainContainer>
  );
};

export default MainSection;
