// UseState hook import
import { useState } from 'react';

// Bottom Navbar Context import
import BottomNavbarContext from './bottomNavbarContext';

const BottomNavbarState = (props) => {
  // Variables for active search on mobile view
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Variables for active notification on mobile view
  const [isNotificationActive, setIsNotificationActive] = useState(false);

  // Function to toggle active state of search bar
  const toggleIsSearchActive = () => {
    // Closing all opened tab by Bottom Navbar
    setIsNotificationActive(false);

    // Toggling Search Active State
    setIsSearchActive(!isSearchActive);
  };

  // Function to toggle active state of notification panel
  const toggleIsNotificationActive = () => {
    // Closing all opened tab by Bottom Navbar
    setIsSearchActive(false);

    // Toggling Notification Active State
    setIsNotificationActive(!isNotificationActive);
  };

  // Handler for clicking outside of navigation dropdown
  const notificationClickAwayHandler = () => {
    setIsNotificationActive(false);
  };

  return (
    <BottomNavbarContext.Provider
      value={{
        isSearchActive,
        toggleIsSearchActive,
        isNotificationActive,
        toggleIsNotificationActive,
        notificationClickAwayHandler,
      }}
    >
      {props.children}
    </BottomNavbarContext.Provider>
  );
};

export default BottomNavbarState;
