import { motion, useScroll } from "framer-motion";
import styled from "styled-components";
import Boost from "./sections/Boost";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import HomeHero from "./sections/HomeHero";
import MainSection from "./sections/MainSection";
import { colors, GlobalStyle } from "./components/styled/globalStyle";

const ProgressBar = styled(motion.div)`
  height: 2px;
  background: ${colors.primary.cyan};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transform-origin: 0%;
  z-index: 999999999999999;
`;

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <GlobalStyle />
      <ProgressBar style={{ scaleX: scrollYProgress }} />
      <main>
        <Header />
        <HomeHero />
        <MainSection />
        <Boost />
        <Footer />
      </main>
    </>
  );
}

export default App;
