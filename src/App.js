import './App.css';
import Footer from './common/Footer';
import AiProfit from './components/AiProfit';
import Faq from './components/Faq';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Hero />
      <AiProfit/>
      <Testimonials />
      <Faq />
      <Footer/>
    </>
  );
}

export default App;
