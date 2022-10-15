import Boost from './sections/Boost';
import Footer from './sections/Footer';
import Header from './sections/Header';
import HomeHero from './sections/HomeHero';
import MainSection from './sections/Main';
import { GlobalStyle } from './styled/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HomeHero />
      <MainSection />
      <Boost />
      <Footer/>
    </>
  );
}

export default App;
