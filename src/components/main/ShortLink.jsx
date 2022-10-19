import React, { useState } from "react";
import styled from "styled-components";
import {
  ButtonWrapper,
  CopyButton,
  LinkItem,
  LongUrl,
  ShortenLink,
} from "../styled/clipBoardStyles";
import { colors } from "../styled/globalStyle";

const CopiedButton = styled(CopyButton)`
  background-color: ${({ copied }) => copied && colors.primary.darkViolet};
`;

const ShortLink = ({ link, id, copyToClipboard }) => {
  return (
    <LinkItem>
      <LongUrl>
        <a href={link.original_link} target="_black" rel="noreferrer">
          {link.original_link}
        </a>
      </LongUrl>
      <ShortenLink>
        <a href={`https://${link.short_link}`} target="_black" rel="noreferrer">
          {link.short_link}
        </a>
      </ShortenLink>
      <ButtonWrapper>
        <CopiedButton copied={link.copied} onClick={(e) => copyToClipboard(e, id)}>
          {link.copied ? "Copied!" : "Copy"}
        </CopiedButton>
      </ButtonWrapper>
    </LinkItem>
  );
};

export default ShortLink;
