import React from 'react';

// Grow transition Import from Material UI
import { Grow } from '@mui/material';

// Card component import
import Card from '../UI/Card';

// Stylesheet import
import classes from './ProfileDropdown.module.css';

import { Link } from 'react-router-dom';

// Icons import from Feather icon
import {
  User as Profile,
  Zap as CreativeInterest,
  Power as Logout,
  Settings,
} from 'react-feather';

function ProfileDropdown() {
  return (
    <Grow in={true}>
      <div className={classes.dropdown}>
        <Card>
          <div className={classes.header}>
            <h4 className="component-heading">David M Smith</h4>
          </div>
          <div className={classes.container}>
            <div className={classes.item}>
              <Profile className={classes.icon} />
              <h4 className="element-heading">Profile</h4>
            </div>
            <div className={classes.item}>
              <CreativeInterest className={classes.icon} />
              <h4 className="element-heading">Creative Interest</h4>
            </div>
            <div className={classes.item}>
              <Settings className={classes.icon} />
              <h4 className="element-heading">Settings</h4>
            </div>
            <Link to="/entry/">
              <div className={classes.item}>
                <Logout className={classes.icon} />
                <h4 className="element-heading">Logout</h4>
              </div>
            </Link>
          </div>
        </Card>
      </div>
    </Grow>
  );
}

export default ProfileDropdown;
