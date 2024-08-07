import './App.css';
import AboutUS from './components/AboutUS';
import Card from './components/Card';
import Client from './components/Client';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import NailExtension from './components/NailExtension';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Card />
      <AboutUS />
      <Client />
      <Testimonials />
      <NailExtension />
      <Footer />
    </>
  );
}

export default App;
