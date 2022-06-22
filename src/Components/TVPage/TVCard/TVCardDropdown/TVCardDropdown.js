import React, { useState } from 'react';

// Stylesheet import
import classes from './TVCardDropdown.module.css';

// Icon import from Feather icon
import { Bookmark as Save, Edit2 as Edit } from 'react-feather';

// Zoom & Grow transition import form Material UI
import { Zoom, Grow } from '@mui/material';

// Card Component import from UI section
import Card from '../../../UI/Card';

// Delete Element import
import DeleteElement from './DeleteElement';

// Flag Element import
import FlagElement from './FlagElement';

function TVCardDropdown() {
  const [isSaved, setIsSaved] = useState(false);

  const toggleSaveHandler = () => {
    setIsSaved(!isSaved);
  };

  return (
    <Grow in={true}>
      <div className={classes.dropdown}>
        <Card>
          <div className={classes.element} onClick={toggleSaveHandler}>
            {/* Changing saved icon on saving */}
            {!isSaved && (
              <Zoom in={true}>
                <Save className={classes.icon} />
              </Zoom>
            )}
            {isSaved && (
              <Zoom in={true}>
                <Save className={classes.saved} />
              </Zoom>
            )}
            <p className="element-heading">{isSaved ? 'Saved' : 'Save'}</p>
          </div>
          <FlagElement />
          <div className={classes.element}>
            <Edit className={classes.icon} />
            <p className="element-heading">Edit</p>
          </div>
          <DeleteElement />
        </Card>
      </div>
    </Grow>
  );
}

export default TVCardDropdown;
