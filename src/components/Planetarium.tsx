import React from 'react';
import Carousel from 'react-material-ui-carousel'
import './Planetarium.css';
import './PlanetariumCard';
import PlanetariumCard from './PlanetariumCard';


const items = [
    {
        title: "Random Title #1",
        image: "The sun"
    },
    {
        title: "Random Title #1",
        image: "The sun"
    }
]

const Planetarium = () => {
  return (
  <div className="planetarium">
      <Carousel autoPlay={false} animation="slide" indicators={false} fullHeightHover={false} navButtonsAlwaysVisible={false}>
          {
              items.map( (item, i) => <PlanetariumCard key={i} />)
          }
      </Carousel>
  </div>
  );
}

export default Planetarium;
