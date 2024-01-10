import React, {useState, useEffect} from 'react';
import { animateScroll as scroll } from 'react-scroll';
import '../component.css';

const Home = () => {
  const words = ['React', 'Angular', 'SpringBoot', 'Web'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the index and loop back to 0 when reaching the end
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change the interval time as needed

    return () => clearInterval(intervalId);
  }, [words.length]);


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
    <div id="home" className="section" >
      <h1>Hello my name is Alexander Soudry, welcome to my World</h1>
      <h1> I am the {words[currentWordIndex]} Developer that you need.</h1>
      <button
         onClick={() => scrollToSection('about')}
      > Click here to learn more.</button>
    </div>
  );
};

export default Home;
