import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  const handleScrollTo = (target) => {
    scroll.scrollTo(target, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div>
      <div className="sticky-navbar">
        <nav >
          <ul>
              <li>
                <ScrollLink to="home" smooth={true} offset={-95} duration={800}>
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="about" smooth={true} offset={-95} duration={800}>
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="project" smooth={true} offset={-95} duration={800} >
                  Project
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact" smooth={true} offset={-200} duration={800} >
                  Contact
                </ScrollLink>
              </li>
          </ul>
        </nav>
        <hr />
      </div>
    
      <Home />

      <About />

      <Projects />

      <Contact />
    </div>
  );
}

export default App;
