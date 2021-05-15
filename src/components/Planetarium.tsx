import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import "./Planetarium.css";
import PlanetariumCard from "./PlanetariumCard";
import { PlanetariumItems } from "./PlanetariumData";
import {PlanetariumContext} from "./PlanetariumContext";
import { useSnackbar } from 'notistack';

const noOfSwitches = 18;
const initialState: Array<boolean> = Array(noOfSwitches).fill(false);
let count = 0;



const Planetarium = () => {
    const [switches, setSwitches] = useState(initialState);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();


    // const handleClick = () => {
    //     enqueueSnackbar('I love hooks');
    // };

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
            const message = `Setting switch ${id} to ${switchedOn} [count ${count}].`;
            console.log(message);
            enqueueSnackbar(message, {
                variant: 'info',
            });
            state[id] = switchedOn;
            setSwitches(state);
            count++;
            console.log("YYYYYYY");
            // handleClick();
        }
    };

    useEffect(() => {
        console.log("XXXXXXX");
        // return () => {
            
        // }
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
