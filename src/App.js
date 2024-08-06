import './App.css';
import AboutUS from './components/AboutUS';
import Card from './components/Card';
import Client from './components/Client';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Card />
      <AboutUS />
      <Client />
    </>
  );
}

export default App;
