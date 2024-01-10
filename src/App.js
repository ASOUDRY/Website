import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div>
      <Navigation />  
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
