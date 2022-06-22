import React from 'react';

// Stylesheet import
import classes from './TVPageRight.module.css';
// Featured Creator component import
import FeaturedCreators from './FeaturedCreators/FeaturedCreators';

function TVPageRight() {
  return (
    <aside className={classes.right}>
      <FeaturedCreators />
    </aside>
  );
}

export default TVPageRight;
