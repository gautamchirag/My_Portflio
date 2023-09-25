import './App.css';
// import Header from './components/Header/Header';
import Hero from './components/mainpage/hero';
import Contact from './components/pages/contact/contact';
import Skill from './components/pages/skill';
import Footer from './components/footer/Footer';
import Resume from './components/pages/resume/Resume';
import Work from './components/pages/work/Work';

function App() {
  return (
    <div>
      <Hero />
      <Skill />
      <Work />
      <Resume />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
