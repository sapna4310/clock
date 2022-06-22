import React from 'react';

// Stylesheet import
import classes from './Dropdown.module.css';

// Icon import from Feather icon
import { Trash, Flag } from 'react-feather';

// Grow animation from Material UI
import { Grow } from '@mui/material';

function Dropdown() {
  return (
    <Grow in={true}>
      <div className={classes.dropdown}>
        <div className={classes.element}>
          <Trash className={classes.icon} />
          <h4 className="element-heading">Delete</h4>
        </div>
        {false && (
          <div className={classes.element}>
            <Flag className={classes.icon} />
            <h4 className="element-heading">Flag</h4>
          </div>
        )}
      </div>
    </Grow>
  );
}

export default Dropdown;
