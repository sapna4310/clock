import React from 'react';

// Importing mediaQuery Hook from Material UI
import useMediaQuery from '@mui/material/useMediaQuery';

// Importing stylesheet
import classes from './NavbarLeft.module.css';

// Logo image import
import Logo from '../../Assets/Logo/logo.png';

//Search input UI component Import
import SearchInput from './SearchInput';

function NavbarLeft() {
  const tabPort = useMediaQuery('(max-width: 900px)');

  return (
    <div className={classes.left}>
      <div className={classes.logoContainer}>
        <img src={Logo} alt="Srijcon Logo" className={classes.logo} />
        <p className={classes.logoText}>Srijcon</p>
      </div>
      <div className={classes.search}></div>
      {/* Hide Search Input when window size is 900px */}
      {!tabPort && <SearchInput data={{ type: 'text' }} width="40rem" />}
    </div>
  );
}

export default NavbarLeft;
