// components/Home.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import '../component.css';

const Projects = () => {

  const data = [
    { id: 1, name: 'Hehl', description: "A free to play online text-based dark fantasy game.", 
    front: "https://github.com/ASOUDRY/Hehlma-Journey-of-Oil-and-Shadow",
    back: "https://github.com/ASOUDRY/Hehl-Api"  },
    { id: 2, name: 'Flumblr', 
    description: "A mock social media application with features reminscent of a Twitter/Tumblr Hybrid", 
    front: "https://github.com/ASOUDRY/Flumbr-Frontend",
    back: "https://github.com/ASOUDRY/Flumblr-Backend"  },
    { id: 3, name: 'D&D Colosseum', 
    description: "A combat game based on the statistics used in the world's most popular RPGing game", 
    front: "https://github.com/ASOUDRY/Soudry-P1-Frontend", 
    back: "https://github.com/ASOUDRY/Soudry-P1-Backend" },
  ];

  const cardStyle = {
    width: '300px',
    height: '300px', 
    margin: '20px'
  };

  const renderedCards = data.map((item) => (
    <div key={item.id}>
      <Card style={cardStyle}>
        <Card.Body border="primary" style={{ maxHeight: '220px', overflow: 'hidden' }}>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Button href={item.front} variant="primary">Link to Frontend code oncl</Button>
          <Button variant="primary">Link to Backend code</Button>
        </Card.Body>
      </Card>
    </div>
  ));
  return (
    <div id="project" className="section">
      <h2>Projects</h2>
      <div className='projects'>
        {renderedCards}
      </div>
    </div>
  );
};

export default Projects;
