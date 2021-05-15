import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
// import clsx from 'clsx';
import { ToggleButton } from '@material-ui/lab';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'; // lightbulb

import './ToggleControl.css';

const useStyles = makeStyles({
    control: {
        color: "#aaaaaa",
        backgroundColor: "#222222",
        padding: "8px",
        borderRadius: "8px",
        "&:hover": {
            backgroundColor: "#555555"
        }
    },
    selected: {
        color: "#ffff00 !important",
        backgroundColor: "#222222 !important",
        "&:hover": {
            backgroundColor: "#555555 !important"
        }
    }
})

type toggleControlProps = {
    toggled: boolean,
    callback: any,
}

const ToggleControl = ({toggled, callback} : toggleControlProps) => {
    const classes = useStyles();
    const [selected , setSelected] = React.useState(toggled);

    const onChangeHandler = (newValue:boolean) => {
        // update local state for rendering
        setSelected(newValue);
        // update callback
        callback(newValue);
    };

  return (
    <ToggleButton
      value={0}
      selected={toggled || selected}
      classes={{ selected: classes.selected }}
      className={classes.control}
      disableRipple={false}
      onChange={() => {
        onChangeHandler(!selected);
      }}
    >
      <EmojiObjectsIcon fontSize="large" />
    </ToggleButton>
  );
}

export default ToggleControl;
