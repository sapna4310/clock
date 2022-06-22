import React from 'react';

// Stylesheet import
import classes from './TVPageMain.module.css';

// TV Card Component import
import TVCard from './TVCard/TVCard';

function TVPageMain() {
  return (
    <main className={classes.main}>
      <TVCard />
    </main>
  );
}

export default TVPageMain;
