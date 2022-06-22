import React from 'react';

// Stylesheet import
import classes from './TVPage.module.css';

// TV Page left, main and right component import
import TVPageLeft from './TVPageLeft';
import TVPageMain from './TVPageMain';
import TVPageRight from './TVPageRight';

function TVPage() {
  return (
    <div className={classes.tvPage}>
      <TVPageLeft />
      <TVPageMain />
      <TVPageRight />
    </div>
  );
}

export default TVPage;
