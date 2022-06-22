import React, { useContext } from 'react';

// Stylesheet import
import classes from './BottomNavbar.module.css';

// Icon import from Feather icon
import {
  Bell as Notifications,
  MessageSquare as Message,
  Plus as AddIcon,
  Search as SearchIcon,
} from 'react-feather';

// Avatar component import frm Material UI
import Avatar from '@mui/material/Avatar';

// Click Away listener import from Material UI
import ClickAwayListener from '@mui/material/ClickAwayListener';

// Image import for navbar avatar
import AvatarImg from '../../Assets/Avatar/kaleem.jpg';

// Bottom Navbar Context import
import bottomNavbarContext from '../../Context/Navbar/bottomNavbarContext';

// Notification Dropdown component import
import Dropdown from '../Navbar/Dropdown';

function BottomNavbar() {
  const {
    toggleIsSearchActive,
    isNotificationActive,
    toggleIsNotificationActive,
    notificationClickAwayHandler,
  } = useContext(bottomNavbarContext);

  // Handler for Clicking on search
  const searchClickHandler = () => {
    toggleIsSearchActive();
  };

  return (
    <div className={classes.navbar} id="bottom-navbar">
      <ClickAwayListener onClickAway={notificationClickAwayHandler}>
        <div className={classes.container}>
          <Notifications
            className={classes.item}
            onClick={toggleIsNotificationActive}
          />
          {isNotificationActive && <Dropdown />}
        </div>
      </ClickAwayListener>

      <Message className={classes.item} />
      <AddIcon className={classes.add} />
      <SearchIcon className={classes.item} onClick={searchClickHandler} />
      <Avatar src={AvatarImg} className={classes.avatar} />
    </div>
  );
}

export default BottomNavbar;
