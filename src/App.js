import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Welcome from './components/Welcome/Welcome'
import Portfolio from './components/Portfolio/Projects'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome 
        title="Welcome"
        subtitle="Welcome"
        id="welcome"
      />

      <Portfolio
        title="Portfolio"
        subtitle="Portfolio"
        id="portfolio"
      /> 

      <About
        title="About"
        subtitle="About"
        id="about"
      /> 

      <Contact
        title="Contact"
        subtitle="Contact"
        id="contact"
      /> 
    </div>
  );
}

export default App;
