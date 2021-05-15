import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import "./Planetarium.css";
import PlanetariumCard from "./PlanetariumCard";
import { PlanetariumItems } from "./PlanetariumData";
import {PlanetariumContext} from "./PlanetariumContext";

const noOfSwitches = 18;
const initialState: Array<boolean> = Array(noOfSwitches).fill(false);
let count = 0;



const Planetarium = () => {
    const [switches, setSwitches] = useState(initialState);

    // preload all images
    // useEffect(() => {
    //     PlanetariumItems.forEach((item) => {
    //         const img = new Image();
    //         img.src = item.image;
    //     });
    //     return () => { };
    // }, []);

    const setSwitched = (id: number, switchedOn: boolean) => {
        if (id < 0 || id > noOfSwitches) {
            console.log("Cannot set switch: Outside of array bounds");
            return;
        }

        let state = switches;
        if (state[id] !== switchedOn) {
            console.log(`Setting switch ${id} to ${switchedOn} [count ${count}].`);
            state[id] = switchedOn;
            setSwitches(state);
            count++;
        }
    };

    useEffect(() => {
        console.log("XXXXXXX")
        return () => {
            
        }
    })

    return (
        <div className="planetarium">
            <PlanetariumContext.Provider value={switches}>
            <Carousel
                autoPlay={false}
                animation="fade"
                indicators={false}
                fullHeightHover={false}
                navButtonsAlwaysVisible={true}
            >
                {
                    PlanetariumItems.map( (item, i) => (
                        <PlanetariumCard
                            cardItem={item}
                            key={i}
                            switchedOn={switches[item.id]}
                            setSwitchedOn={setSwitched}
                        />
                    ))
                }
            </Carousel>
            </PlanetariumContext.Provider>
        </div>
    );
};

export default Planetarium;
