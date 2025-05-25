import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';

const App = () => {

  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <Hero scrollTo={scrollTo} />
      <About />
      <Menu />
      <Contact scrollTo={scrollTo} />
    </div>
  );
};

export default App;
