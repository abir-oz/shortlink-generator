import React, { useState } from "react";
import {
  ButtonWrapper,
  CopyButton,
  LinkItem,
  LongUrl,
  ShortenLink,
} from "../styled/mainStyles";

const Item = ({ link }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link.short_link);
    setCopied(true);
  };
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
        <CopyButton copied={copied} onClick={copyToClipboard}>
          {copied ? "Copied!" : "Copy"}
        </CopyButton>
      </ButtonWrapper>
    </LinkItem>
  );
};

export default Item;
