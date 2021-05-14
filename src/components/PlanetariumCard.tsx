// import { makeStyles } from "@material-ui/core";
import React from "react";
import ToggleControl from "./ToggleControl";
import { PlanetariumItem } from "./PlanetariumData";
import "./PlanetariumCard.css";

// import image from '../resources/sun.jpg';

type PlanetariumCardProps = {
  cardItem: PlanetariumItem
}


const PlanetariumCard = ({cardItem}:PlanetariumCardProps) => {
//   const classes = makeStyles();
const title = cardItem.title;

  return (
    <div className="container">
      <div className="frame" style={{ backgroundImage: `url(${cardItem.image})` }}></div>
      <div className="topleft title">{title}</div>
      <div className="bottomright">
        <ToggleControl />
      </div>
    </div>
  );
};

export default PlanetariumCard;
