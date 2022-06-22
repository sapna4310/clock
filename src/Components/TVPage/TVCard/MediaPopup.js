import React from 'react';

// Stylesheet import
import classes from './MediaPopup.module.css';

// Modal import from Material UI
import Modal from '@mui/material/Modal';

// Media Compoenent import from Material UI
import Media from './Media';

function MediaPopup({ open, handleClose }) {
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.popup}>
          <Media />
        </div>
      </Modal>
    </>
  );
}

export default MediaPopup;
