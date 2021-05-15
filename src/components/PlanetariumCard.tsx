// import { makeStyles } from "@material-ui/core";
import React from "react";
import ToggleControl from "./ToggleControl";
import { PlanetariumItem } from "./PlanetariumData";
import "./PlanetariumCard.css";
import { PlanetariumContext} from "./PlanetariumContext";

// import image from '../resources/sun.jpg';

type PlanetariumCardProps = {
  cardItem: PlanetariumItem,
  switchedOn: boolean,
  setSwitchedOn: any,
}


const PlanetariumCard = ({cardItem, switchedOn, setSwitchedOn}:PlanetariumCardProps) => {
  const switches = React.useContext(PlanetariumContext);

  const toggleIt = (toggled: boolean) => {
    setSwitchedOn(cardItem.id, toggled);
  }

  return (
    <div className="container">
      <div className="frame" style={{ backgroundImage: `url(${cardItem.image})` }}></div>
      <div className="topleft title">{cardItem.title}</div>
      <div className="bottomright">
        <ToggleControl toggled={switches[cardItem.id]} callback={toggleIt}/>
      </div>
    </div>
  );
};

export default PlanetariumCard;
