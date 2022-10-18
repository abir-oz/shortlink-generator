import Boost from "./sections/Boost";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import HomeHero from "./sections/HomeHero";
import MainSection from "./sections/MainSection";
import { GlobalStyle } from "./components/styled/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <main role="main">
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
