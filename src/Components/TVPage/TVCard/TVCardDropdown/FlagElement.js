import React, { useState } from 'react';

// Stylesheet import
import classes from './FlagElement.module.css';

// Icon import from Feather Icons
import { Flag } from 'react-feather';

// Modal component import from Material UI
import { Modal } from '@mui/material';

function FlagElement() {
  const [isModalActive, setIsModalActive] = useState(false);

  const openHandler = () => {
    setIsModalActive(true);
  };

  const closeHandler = () => {
    setIsModalActive(false);
  };

  return (
    <>
      <div className={classes.element} onClick={openHandler}>
        <Flag className={classes.icon} />
        <p className="element-heading">Flag</p>
      </div>

      <Modal open={isModalActive} onClose={closeHandler}>
        <div className={classes.modalContainer}>
          <h3 className={classes.heading}>What's wrong?</h3>
          <form action="submit">
            <input
              type="text"
              name="reportInput"
              id="reportInput"
              className={classes.input}
              maxLength={150}
              autoComplete="off"
            />
            <input type="submit" value="Report" className={classes.submit} />
          </form>
        </div>
      </Modal>
    </>
  );
}

export default FlagElement;
