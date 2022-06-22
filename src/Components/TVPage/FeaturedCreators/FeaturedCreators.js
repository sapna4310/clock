import React from 'react';

// Stylesheet import
import classes from './FeaturedCreators.module.css';

// Icon import from Feather icon
import { UserPlus as FollowIcon } from 'react-feather';

// Avatar component import from Material UI
import Avatar from '@mui/material/Avatar';

//MyToolTip Component import

import MyToolTip from '../../UI/MyToolTip';

// Card component import
import Card from '../../UI/Card';

//! Avatar import
import MarryHillAvatar from '../../../Assets/Avatar/avatar1.jpg';
import LawrenceBaltazarAvatar from '../../../Assets/Avatar/avatar2.jpg';
import GuadalupeHuntAvatar from '../../../Assets/Avatar/avatar3.jpg';
import HarleySniderAvatar from '../../../Assets/Avatar/avatar7.jpg';
import DevinKernanAvatar from '../../../Assets/Avatar/avatar8.jpg';

//! Dummy data for featured component
const DUMMY_DATA_FEATUREDCRETOR = [
  {
    id: 1,
    name: 'Mary R Hill',
    interest: 'Kinetic Art',
    avatar: MarryHillAvatar,
  },
  {
    id: 2,
    name: 'Lawrence K Baltazar',
    interest: 'Animatronics',
    avatar: LawrenceBaltazarAvatar,
  },

  {
    id: 3,
    name: 'Guadalupe M Hunt',
    interest: 'Arduino',
    avatar: GuadalupeHuntAvatar,
  },
  {
    id: 4,
    name: 'Harley D Snider',
    interest: 'Composting',
    avatar: HarleySniderAvatar,
  },
  {
    id: 5,
    name: 'Devin T Kernan',
    interest: 'Mechatronics',
    avatar: DevinKernanAvatar,
  },
];

function FeaturedCreators() {
  return (
    <div>
      <Card>
        <div className={classes.header}>
          <h4 className="component-heading">Featured Creators</h4>
        </div>
        <div className={classes.container}>
          {DUMMY_DATA_FEATUREDCRETOR.map((element) => (
            <div className={classes.element} key={element.id}>
              <Avatar src={element.avatar} className={classes.avatar} />
              <div className={classes.description}>
                <h4 className="element-heading">{element.name}</h4>
                <p className="element-description">{element.interest}</p>
              </div>
              <MyToolTip title="Follow" placement="left">
                <FollowIcon className={classes.follow} />
              </MyToolTip>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default FeaturedCreators;
