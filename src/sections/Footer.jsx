import { AnimatePresence, useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { cardVariant, slideInLeft, slideInRight } from "../components/framer";
import MainLogo from "../components/MainLogo";
import { colors } from "../components/styled/globalStyle";
import {
  FooterContainer,
  Wrapper,
  Logo,
  MenusContainer,
  Menu,
  MenuTitle,
  List,
  Item,
  SocialMedia,
} from "../components/styled/footerStyle";

// Menu Data
const menuData = [
  {
    title: "Features",
    items: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    title: "Resources",
    items: ["Blog", "Developers", "Support"],
  },
  {
    title: "Company",
    items: ["About", "Our Team", "Careers"],
  },
];

const SocialLink = [
  {
    id: 1,
    icon: "/icon-facebook.svg",
    url: "https://www.facebook.com/",
    label: "Facebook",
  },
  {
    id: 2,
    icon: "/icon-twitter.svg",
    url: "https://twitter.com/",
    label: "Twitter",
  },
  {
    id: 3,
    icon: "/icon-pinterest.svg",
    url: "https://www.pinterest.com/",
    label: "Pinterest",
  },
  {
    id: 4,
    icon: "/icon-instagram.svg",
    url: "https://www.instagram.com/",
    label: "Instagram",
  },
];

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <Logo>
          <MainLogo fill={colors.neutral.white} />
        </Logo>
        <MenusContainer>
          {menuData.map((menu, index) => (
            <Menu key={index}>
              <MenuTitle>{menu.title}</MenuTitle>
              <List>
                {menu.items.map((item, index) => (
                  <Item whileHover={{ scale: 1.03 }} key={index}>
                    <a href={item.toLowerCase()}>{item}</a>
                  </Item>
                ))}
              </List>
            </Menu>
          ))}

          <SocialMedia>
            {
              <List>
                {SocialLink.map((link) => (
                  <motion.li key={link.id} whileHover={{ scale: 1.1 }}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.label}
                    >
                      <img src={link.icon} alt={link.label} />
                    </a>
                  </motion.li>
                ))}
              </List>
            }
          </SocialMedia>
        </MenusContainer>
      </Wrapper>
    </FooterContainer>
  );
};

export default Footer;
