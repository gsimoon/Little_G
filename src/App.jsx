import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="app">
      <Hero />
      <About />
      <Menu />
      <Contact />
    </div>
  );
};

export default App;
