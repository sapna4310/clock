// UseReducer hook import
import { useState } from 'react';

// Importing mediaQuery Hook from Material UI
import useMediaQuery from '@mui/material/useMediaQuery';

// Icon import from Feather Icon
import {
  Bell as Notifications,
  Mail as Message,
  Plus as AddIcon,
  Settings,
} from 'react-feather';

// Stylesheet import
import classes from './NavbarRight.module.css';

// Avatar component import frm Material UI
import Avatar from '@mui/material/Avatar';

// Image import for navbar avatar
import AvatarImg from '../../Assets/Avatar/kaleem.jpg';

// Badge import from Material UI
import Badge from '@mui/material/Badge';

// ClickAwayListner import from Material UI
import ClickAwayListener from '@mui/base/ClickAwayListener';

// Profile Dropdown Component import
import ProfileDropdown from './ProfileDropdown';

// Dropdown Component import
import Dropdown from './Dropdown';
// import My Tooltip components
import MyToolTip from '../UI/MyToolTip';

// Initial icon style
const iconInitialStyle = { fontSize: 40, color: '#9b9b9b' };

function NavbarRight() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [isNotificationDropdownActive, setIsNotificationDropdownActive] =
    useState(false);
  const [isProfileDropdownActive, setIsProfileDropdownActive] = useState(false);

  const handleClickAwayNotification = () => {
    setIsNotificationDropdownActive(false);
  };

  const handleClickAwayProfile = () => {
    setIsProfileDropdownActive(false);
  };

  const notificationClickHandler = () => {
    if (!isNotificationDropdownActive) {
      setActiveDropdown('notification');
      setIsNotificationDropdownActive(true);
    }

    if (isNotificationDropdownActive) {
      setIsNotificationDropdownActive(false);
    }
  };

  const profileClickHandler = () => {
    if (!isProfileDropdownActive) {
      setActiveDropdown('profile');
      setIsProfileDropdownActive(true);
    }

    if (isProfileDropdownActive) {
      setIsProfileDropdownActive(false);
    }
  };

  // Media Queries
  const tabPort = useMediaQuery('(max-width: 900px)');

  return (
    <div className={classes.right}>
      {/* Hide below given section when window width is below 900px */}
      {!tabPort && (
        <>
          <MyToolTip title="Upload" placement="bottom">
            <AddIcon className={classes.add} />
          </MyToolTip>
          <ClickAwayListener onClickAway={handleClickAwayNotification}>
            <div className={classes.container}>
              <Badge
                color="error"
                overlap="circular"
                variant="dot"
                invisible={false}
              >
                <Notifications
                  className={classes.item}
                  onClick={notificationClickHandler}
                />
              </Badge>
              {activeDropdown === 'notification' &&
              isNotificationDropdownActive ? (
                <Dropdown activeDropdown={activeDropdown} />
              ) : null}
            </div>
          </ClickAwayListener>
          <Badge
            color="error"
            overlap="circular"
            variant="dot"
            invisible={true}
          >
            <Message sx={iconInitialStyle} className={classes.item} />
          </Badge>
          <ClickAwayListener onClickAway={handleClickAwayProfile}>
            <div className={classes.dropdown}>
              <Avatar
                alt="Avtar"
                className={classes.avatar}
                src={AvatarImg}
                sx={{ width: 40, height: 40 }}
                onClick={profileClickHandler}
              ></Avatar>
              {activeDropdown === 'profile' && isProfileDropdownActive ? (
                <ProfileDropdown />
              ) : null}
            </div>
          </ClickAwayListener>
        </>
      )}
      {tabPort && <Settings className={classes.settings} />}
    </div>
  );
}

export default NavbarRight;
