import React, { useState } from 'react';

// Stylesheet import
import classes from './Header.module.css';

import { MoreVertical as MoreIcon } from 'react-feather';

// Avatar Component import from Material UI
import Avatar from '@mui/material/Avatar';

// Click Away Listner import from Material UI
import ClickAwayListener from '@mui/material/ClickAwayListener';

// Dropdown Element import
import TVCardDropdown from './TVCardDropdown/TVCardDropdown';

//! import avatar image
import LeticiaStroud from '../../../Assets/Avatar/avatar9.jpg';

function TVCardHeader() {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const moreClickHandler = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  const clickAwayHandler = () => {
    setIsDropdownActive(false);
  };

  return (
    <div className={classes.header}>
      <Avatar src={LeticiaStroud} className={classes.avatar} />
      <div className={classes.about}>
        <h4 className={classes.name}>Leticia M Stroud</h4>
        <p className={classes.contentType}>Normal Post</p>
      </div>
      <ClickAwayListener onClickAway={clickAwayHandler}>
        <div className={classes.moreContainer}>
          <MoreIcon className={classes.moreIcon} onClick={moreClickHandler} />
          {isDropdownActive && <TVCardDropdown />}
        </div>
      </ClickAwayListener>
    </div>
  );
}

export default TVCardHeader;
