// UseState Hook import
import React, { useState, useContext } from 'react';

// Stylesheet import
import classes from './Navbar.module.css';

// Navbar Left and Right Component Import
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';

// Search Input component import
import SearchInput from './SearchInput';

// Bottom Navbar Context Import
import bottomNavbarContext from '../../Context/Navbar/bottomNavbarContext';

const Navbar = function () {
  // Destructing Active Search for Bottom Navbar Search Click
  const { isSearchActive, toggleIsSearchActive } =
    useContext(bottomNavbarContext);

  // Setting Active Dropdown
  const [activeDropdown, setActiveDropdown] = useState(null);

  // State for clickawaylistner
  const [open, setOpen] = React.useState(false);

  // Functionn for clickawaylistner
  const handleClickAway = () => {
    setOpen(false);
    setActiveDropdown(null);
  };

  // Function for Click on Navbar Favorite icon
  const favoriteDropdownHandler = () => {
    if (!activeDropdown || activeDropdown !== 'favorites') {
      setActiveDropdown('favorites');
      setOpen(true);
    }
    if (activeDropdown === 'favorites') setActiveDropdown(null);
  };

  // Function for Click on Navbar Notification icon
  const notificationDropdownHandler = () => {
    if (!activeDropdown || activeDropdown !== 'notification') {
      setActiveDropdown('notification');
      setOpen(true);
    }
    if (activeDropdown === 'notification') setActiveDropdown(null);
  };

  // Function for Click on Navbar Profile icon
  const profileDropdownHandler = () => {
    if (!activeDropdown || activeDropdown !== 'profile')
      setActiveDropdown('profile');
    if (activeDropdown === 'profile') setActiveDropdown(null);
  };

  return (
    <div className={classes.navbar} id="top-navbar">
      {/* Display left and right navbar if isSearchActive is false */}
      {!isSearchActive && (
        <>
          <NavbarLeft
            activeDropdown={activeDropdown}
            favoriteDropdownHandler={favoriteDropdownHandler}
            notificationDropdownHandler={notificationDropdownHandler}
            handleClickAway={handleClickAway}
            open={open}
          />
          <NavbarRight
            activeDropdown={activeDropdown}
            profileDropdownHandler={profileDropdownHandler}
          />
        </>
      )}
      {/* Display search input when isSearchActive is true on click on Search button on bottom Navigation */}
      {isSearchActive && (
        <SearchInput
          data={{ type: 'text' }}
          showClose={true}
          width="100%"
          closeInput={toggleIsSearchActive}
        />
      )}
    </div>
  );
};

export default Navbar;
