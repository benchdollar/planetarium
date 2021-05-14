// import { makeStyles } from "@material-ui/core";
import React from "react";
import ToggleControl from "./ToggleControl";
import "./PlanetariumCard.css";

import image from '../resources/sun.jpg';


const PlanetariumCard = (props: Partial<PlanetariumItem>) => {
//   const classes = makeStyles();
const title = "This is the title";

  return (
    <div className="container">
      <div className="frame" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="topleft title">{title}</div>
      <div className="bottomright">
        <ToggleControl />
      </div>
    </div>
  );
};

export default PlanetariumCard;
