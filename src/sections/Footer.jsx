import styled from 'styled-components';
import { colors } from '../styled/globalStyle';

// Menu Data
const menuData = [
  {
    title: 'Features',
    items: ['Link Shortening', 'Branded Links', 'Analytics'],
  },
  {
    title: 'Resources',
    items: ['Blog', 'Developers', 'Support'],
  },
  {
    title: 'Company',
    items: ['About', 'Our Team', 'Careers'],
  },
];

const SocialLink = [
  {
    id: 1,
    icon: '/icon-facebook.svg',
    url: 'https://www.facebook.com/',
  },
  {
    id: 2,
    icon: '/icon-twitter.svg',
    url: 'https://twitter.com/',
  },
  {
    id: 3,
    icon: '/icon-pinterest.svg',
    url: 'https://www.pinterest.com/',
  },
  {
    id: 4,
    icon: '/icon-instagram.svg',
    url: 'https://www.instagram.com/',
  },
];

const FooterContainer = styled.div`
  width: 100%;
  background-color: ${colors.neutral.veryDarkViolet};
  color: ${colors.neutral.white};
`;

const Wrapper = styled.div`
  padding: 6rem 8rem;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

// Logo
const Logo = styled.div`
  margin-top: 2rem;
  text-align: center;
  & img {
    width: 110px;
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

// Menus container
const MenusContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    margin-left: auto;
    gap: 5rem;
  }
`;

// Menu
const Menu = styled.div`
  margin: 1.5rem 0;

  @media (min-width: 768px) {
    margin: 0 2rem;
  }
`;

// Menu Title
const MenuTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1.3rem;
`;

// List
const List = styled.ul``;

const Item = styled.li`
  margin-bottom: 0.7rem;
  font-size: 1rem;
  font-weight: 400;
  & a {
    color: ${colors.neutral.grayishViolet};

    &:hover {
      color: ${colors.neutral.white};
      text-decoration: underline;
    }
  }
`;

const SocialMedia = styled.div`
  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    & li {
      margin: 0 0.8rem;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      & a {
        & img {
          width: 20px;
        }
      }
    }

    @media (min-width: 768px) {
      margin-top: 0;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <Logo>
          <img src="/logo-footer.svg" alt="" />
        </Logo>
        <MenusContainer>
          {menuData.map((menu, index) => (
            <Menu key={index}>
              <MenuTitle>{menu.title}</MenuTitle>
              <List>
                {menu.items.map((item, index) => (
                  <Item key={index}>
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
                  <li key={link.id}>
                    <a href={link.url} target="_blank" rel="noreferrer">
                      <img src={link.icon} alt="" />
                    </a>
                  </li>
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
