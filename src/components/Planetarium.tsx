import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import "./Planetarium.css";
import PlanetariumCard from "./PlanetariumCard";
import { PlanetariumItems } from "./PlanetariumData";
import { PlanetariumContext } from "./PlanetariumContext";
import { useSnackbar } from 'notistack';
import axios from "axios";
import _ from "lodash";

//const apiUrl = 'http://localhost:3001/planetarium/state';
const apiUrl = 'http://192.168.178.175/state';

const noOfSwitches = 18;
const initialState: Array<boolean> = Array(noOfSwitches).fill(false);
let count = 0;

interface PlanetariumStateApi {
    state: string
}



const Planetarium = () => {
    const [switches, setSwitches] = useState(initialState);
    const { enqueueSnackbar } = useSnackbar();


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
            //enqueueSnackbar(message, {variant: 'info'});
            state[id] = switchedOn;
            setSwitches(state);
            count++;
            console.log("state: " + state2string(switches));
            // TODO: unit test
            console.log("state: " + state2string(string2state(state2string(switches))) + " (unit test)");

            // api put
            apiPut(switches);

        }
    };

    const state2string = (state: boolean[]) => {
        return state.map((value, i) => (value ? "1" : "0")).join("");
    }

    const string2state = (input: string) => {
        if (input.length !== noOfSwitches) {
            console.log("Error unpacking state from string representation");
            return [];
        }
        let state = Array<boolean>();
        for (let i = 0; i < input.length; ++i) {
            state.push(input.charAt(i) === '1' ? true : false);
        }
        return state;
    }

    const api2state = (data: PlanetariumStateApi) => {
        // only update state if received api data mismatches
        // TODO remove lodash
        if(!_.isEqual(data.state, state2string(switches))) {
            setSwitches(string2state(data.state));
            enqueueSnackbar(`Updated planetarium state from API`, {
                variant: 'success',
            });
        }
    }

    const apiGet = () => {
        axios.get<PlanetariumStateApi>(apiUrl)
            .then(response => {
                console.log(response.data);
                enqueueSnackbar(`Loaded planetarium state from API`, {
                    variant: 'success',
                });
                api2state(response.data);
            })
            .catch((reason: any) => {
                enqueueSnackbar(`Failed to load planetarium state from API: ${reason}`, {
                    variant: 'error',
                });
            });
    }

    const apiPut = (state: boolean[]) => {
        axios.put(apiUrl, `{"state":"${state2string(state)}"}`)
            .then(response => {
                console.log(response.data);
                enqueueSnackbar(`Set planetarium state with API`, {
                    variant: 'success',
                });
                api2state(response.data);
            })
            .catch((reason: any) => {
                enqueueSnackbar(`Failed to load planetarium state from API: ${reason}`, {
                    variant: 'error',
                });
            });
    }

    useEffect(() => {
        apiGet();
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
                        PlanetariumItems.map((item, i) => (
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
