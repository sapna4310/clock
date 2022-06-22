import React, { useState } from 'react';

// Stylesheet import
import classes from './DeleteElement.module.css';

// Icon import from Feather icon
import { Trash as Delete } from 'react-feather';

// Collapse transition from Material UI
import { Collapse } from '@mui/material';

function DeleteElement() {
  const [isConfirmationActive, setConfirmationActive] = useState(false);

  const activateConfirmation = () => {
    setConfirmationActive(true);
  };

  const deactivateConfirmation = () => {
    setConfirmationActive(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.element} onClick={activateConfirmation}>
        <Delete className={classes.icon} />
        <p className="element-heading">Delete</p>
      </div>
      <Collapse in={isConfirmationActive}>
        <div className={classes.confirmationContainer}>
          <p className={classes.confirmDelete} onClick={deactivateConfirmation}>
            Yes
          </p>
          <p className={classes.cancelDelete} onClick={deactivateConfirmation}>
            No
          </p>
        </div>
      </Collapse>
    </div>
  );
}

export default DeleteElement;
