// UseState Hook import from react
import { useState } from 'react';

// Speed Dial import from Material UI
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';

// Stylesheet import
import classes from './Reactions.module.css';

// Global Stylesheet import for SpeedDial styling
import './Reactions.global.css';

// Reaction Icon import from UI section
import ReactionsIcon from '../../UI/ReactionsIcon';
// import { Award as ReactionsIcon } from 'react-feather';

// ! Speed Dial icon for Developement purpose
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';

const Reactions = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SpeedDial
      ariaLabel="SpeedDial controlled open example"
      icon={<ReactionsIcon className={classes.reactionIcon} />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      className={classes.speedDial}
    >
      <SpeedDialAction
        icon={<FileCopyIcon />}
        tooltipTitle="Inspiring"
        onClick={handleClose}
        className={classes.action}
        tooltipPlacement="right"
      />
      <SpeedDialAction
        icon={<SaveIcon />}
        tooltipTitle="Eco-Friendly"
        onClick={handleClose}
        tooltipPlacement="right"
      />
      <SpeedDialAction
        icon={<PrintIcon />}
        tooltipTitle="Socially Impactful"
        onClick={handleClose}
        tooltipPlacement="right"
      />
    </SpeedDial>
  );
};

export default Reactions;
