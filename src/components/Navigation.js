import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import '../component.css'; // Make sure to adjust the path based on your project structure

const Navigation = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position
      const scrollPosition = window.scrollY;

      // Define your section offsets (adjust as needed)
      const homeOffset = 0;
      const aboutOffset = document.getElementById('about').offsetTop;
      const projectOffset = document.getElementById('project').offsetTop;
      const contactOffset = document.getElementById('contact').offsetTop;

      // Determine the active section based on scroll position
      if (scrollPosition >= homeOffset && scrollPosition < aboutOffset) {
        setActiveSection('home');
      } else if (scrollPosition >= aboutOffset && scrollPosition < projectOffset) {
        setActiveSection('about');
      } else if (scrollPosition >= projectOffset && scrollPosition < contactOffset) {
        setActiveSection('project');
      } else if (scrollPosition >= contactOffset) {
        setActiveSection('contact');
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const scrollToSection = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      scroll.scrollTo(sectionElement.offsetTop, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
  };

  return (
    <div className="sticky-navbar">
      <nav>
        <div className="button-container">
          <button
            className={`nav-button ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>

          <button
            className={`nav-button ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollToSection('about')}
          >
            About
          </button>

          <button
            className={`nav-button ${activeSection === 'project' ? 'active' : ''}`}
            onClick={() => scrollToSection('project')}
          >
            Project
          </button>

          <button
            className={`nav-button ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Navigation;
