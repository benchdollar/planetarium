import React, {useEffect} from 'react';
import Carousel from 'react-material-ui-carousel'
import './Planetarium.css';
import PlanetariumCard from './PlanetariumCard';
import {PlanetariumItems} from './PlanetariumData';

const Planetarium = () => {
    useEffect(() => {
        PlanetariumItems.forEach( (item) => {
            const img = new Image();
            img.src = item.image;
        });
        return () => {
            
        }
    }, [])
  return (
  <div className="planetarium">
      <Carousel autoPlay={false} animation="slide" indicators={false} fullHeightHover={false} navButtonsAlwaysVisible={false}>
          {
              PlanetariumItems.map( (item, i) => <PlanetariumCard cardItem={item} key={i} />)
          }
      </Carousel>
  </div>
  );
}

export default Planetarium;
