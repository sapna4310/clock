import React from 'react';

// Stylesheet import
import classes from './SplashScreen.module.css';

function SplashScreen() {
  var name = 'Jyoti';
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <h1 className={classes.name}>{name} </h1>
        <h1 className={classes.heading}>Welcome to Srijcon !!</h1>
      </div>
    </div>
  );
}

export default SplashScreen;
