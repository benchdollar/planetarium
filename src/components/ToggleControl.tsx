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

const ToggleControl = () => {
    const classes = useStyles();
    const [selected , setSelected] = React.useState(false);

  return (
      <ToggleButton selected={selected} classes={{selected: classes.selected}} className={classes.control} disableRipple={false} onChange={() => {setSelected(!selected)}}>
          <EmojiObjectsIcon fontSize="large" />
      </ToggleButton>
  );
}

export default ToggleControl;
