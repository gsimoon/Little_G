import { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';

const App = () => {

  const [infoDetails, setInfoDetails] = useState([]);

  const apiResponse = async () => {
    await axios.get(process.env.REACT_APP_API_URL_INFO)
      .then((response) => {
        setInfoDetails(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
    apiResponse()
  }, []);

  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <Hero scrollTo={scrollTo} info={infoDetails}/>
      <About info={infoDetails}/>
      <Menu />
      <Contact scrollTo={scrollTo} info={infoDetails}/>
    </div>
  );
};

export default App;
