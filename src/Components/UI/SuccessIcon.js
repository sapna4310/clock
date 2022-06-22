import React from 'react';

// Stylesheet import
import classes from './SuccessIcon.module.css';

// Icon import from Feather icon
import { Check } from 'react-feather';

// Zoom animation import from Material UI
import { Zoom } from '@mui/material';

function SuccessIcon({ checked }) {
  return (
    <div>
      <Zoom in={checked}>
        <Check className={classes.success} />
      </Zoom>
    </div>
  );
}

export default SuccessIcon;
