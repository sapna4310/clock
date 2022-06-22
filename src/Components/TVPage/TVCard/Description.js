import React, { useState } from 'react';

// Stylesheet import
import classes from './Description.module.css';

// Icon import from Feather icon
import { MoreHorizontal, ChevronUp } from 'react-feather';

// Collapse transition import from Material UI
import { Collapse } from '@mui/material';

const descriptionData = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero qui
blanditiis dicta, culpa nobis natus officiis suscipit enim excepturi
amet! Asperiores dignissimos unde magnam assumenda eius veniam rem
dolore esse molestiae sunt animi distinctio ipsa earum ab laboriosam
natus officiis consectetur, sit saepe, consequatur deleniti quae fuga?
Recusandae minus quaerat quas enim? Nulla, repellendus cupiditate optio
tempora, eos perspiciatis voluptatum necessitatibus, commodi facere
animi fuga deleniti expedita illo! Animi fuga deserunt aspernatur odit
similique, quos architecto non? Adipisci doloremque nam voluptatum
recusandae sunt quidem neque veniam tempora voluptatibus reprehenderit
laborum perspiciatis eaque iure quisquam sequi, ut illum ullam dolorem
possimus?`;

function Description() {
  const [isDescriptionActive, setDescriptionActive] = useState(false);

  const activateDescription = () => {
    setDescriptionActive(true);
  };

  const deactivateDescription = () => {
    setDescriptionActive(false);
  };

  return (
    <div className={classes.descriptionContainer}>
      <Collapse in={isDescriptionActive} collapsedSize={20}>
        <div className={`description-text ${classes.description}`}>
          {descriptionData}
        </div>
      </Collapse>

      {isDescriptionActive ? (
        <ChevronUp
          className={`${classes.icon} ${classes.closeDescriptionIcon}`}
          onClick={deactivateDescription}
        />
      ) : (
        <MoreHorizontal
          className={classes.icon}
          onClick={activateDescription}
        />
      )}
    </div>
  );
}

export default Description;
