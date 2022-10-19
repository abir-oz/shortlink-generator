import React from "react";
import { LinksWrapper, PreviousLinks } from "../styled/clipBoardStyles";
import { colors } from "../styled/globalStyle";
import ShortLink from "./ShortLink";

const ShortLinks = ({ links, setLinks }) => {
  const copyToClipboard = (e, id) => {
    let newLinks = links.map((link, index) => {
      if (index === id) {
        return { ...link, copied: true };
      } else {
        return { ...link, copied: false };
      }
    });
    setLinks(newLinks);
    navigator.clipboard.writeText(newLinks[id].short_link);
  };
  return (
    <PreviousLinks>
      <LinksWrapper>
        {links.map((link, index) => (
          <ShortLink
            copyToClipboard={copyToClipboard}
            link={link}
            key={index}
            id={index}
          />
        ))}
      </LinksWrapper>
    </PreviousLinks>
  );
};

export default ShortLinks;
