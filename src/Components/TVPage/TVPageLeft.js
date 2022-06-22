import React from 'react';

// Stylesheet import
import classes from './TVPageLeft.module.css';

// Featured Creator component import
import FeaturedCreators from './FeaturedCreators/FeaturedCreators';

function TVPageLeft() {
  return (
    <aside className={classes.left}>
      <FeaturedCreators />
    </aside>
  );
}

export default TVPageLeft;
