// UseContext Hook import
import { useContext } from 'react';

// Grow transition Import from Material UI
import { Grow } from '@mui/material';

// Icon import form Feather icon
import { Bell as Notifications, X as Close } from 'react-feather';

// Avatar import from Material UI
import Avatar from '@mui/material/Avatar';

// Media Query import from Material UI
import useMediaQuery from '@mui/material/useMediaQuery';

// Stylesheet import
import classes from './Dropdown.module.css';

// Card Element Import
import Card from '../UI/Card';

// Bottom Navbar Context import
import bottomNavbarContext from '../../Context/Navbar/bottomNavbarContext';

//! Image import for development purpose: Favorite Section
import StephenPohlmanAvatar from '../../Assets/Avatar/avatar4.jpg';
import MadelineJacksonAvatar from '../../Assets/Avatar/avatar5.jpg';
import RubiMorrisAvatar from '../../Assets/Avatar/avatar6.jpg';
// import companyAvatar from '../../Assets/Avatar/company-avatar.jpg';

//! Dummy data for dropdown
const notificationDummy = [
  {
    id: 1,
    name: 'Stephen C Pohlman',
    message: 'Is now following you.',
    avtarImg: StephenPohlmanAvatar,
    isSeen: true,
  },
  {
    id: 2,
    name: 'Madeline W Jackson',
    message: 'Liked your post.',
    avtarImg: MadelineJacksonAvatar,
    isSeen: false,
  },
  {
    id: 3,
    name: 'Rubi J Morris',
    message: 'Discussed about your post.',
    avtarImg: RubiMorrisAvatar,
    isSeen: false,
  },
  {
    id: 4,
    name: 'Srijcon',
    message:
      'Srijcon is trying to improve your experience. Take part in survey!',
    avtarImg: RubiMorrisAvatar,
    isSeen: true,
  },
  {
    id: 5,
    name: 'Srijcon',
    message:
      'Srijcon is trying to improve your experience. Take part in survey!',
    avtarImg: RubiMorrisAvatar,
    isSeen: false,
  },
  {
    id: 6,
    name: 'Srijcon',
    message:
      'Srijcon is trying to improve your experience. Take part in survey!',
    avtarImg: RubiMorrisAvatar,
    isSeen: true,
  },
  {
    id: 7,
    name: 'Srijcon',
    message:
      'Srijcon is trying to improve your experience. Take part in survey!',
    avtarImg: RubiMorrisAvatar,
    isSeen: true,
  },
  {
    id: 8,
    name: 'Srijcon',
    message:
      'Srijcon is trying to improve your experience. Take part in survey!',
    avtarImg: RubiMorrisAvatar,
    isSeen: true,
  },
  {
    id: 9,
    name: 'Srijcon',
    message:
      'Srijcon is trying to improve your experience. Take part in survey!',
    avtarImg: RubiMorrisAvatar,
    isSeen: true,
  },
  {
    id: 10,
    name: 'Srijcon',
    message:
      'Srijcon is trying to improve your experience. Take part in survey!',
    avtarImg: RubiMorrisAvatar,
    isSeen: true,
  },
];

const Dropdown = function () {
  // Media query for screen less than 900px
  const tabPort = useMediaQuery('(max-width: 900px)');

  // Import state from context api
  const { toggleIsNotificationActive } = useContext(bottomNavbarContext);

  const dropdownElements = notificationDummy.map((item) => {
    return (
      <div className={classes.element} key={item.id}>
        <Avatar sx={{ width: 36, height: 36 }} src={item.avtarImg} />
        <div className={classes.text}>
          <h4 className="element-heading">{item.name}</h4>
          <p className="element-description">{item.message}</p>
        </div>
        {!item.isSeen && <div className={classes.dot}>New</div>}
      </div>
    );
  });

  return (
    <Grow in={true}>
      <div className={classes.dropdown}>
        <Card>
          <div className={classes.header}>
            <h4 className="component-heading">Notifications</h4>
            {tabPort ? (
              <Close
                className={classes.closeIcon}
                onClick={toggleIsNotificationActive}
              />
            ) : (
              <Notifications className={classes.notificationIcon} />
            )}
          </div>
          <div className={classes.container}>{dropdownElements}</div>
        </Card>
      </div>
    </Grow>
  );
};

export default Dropdown;
