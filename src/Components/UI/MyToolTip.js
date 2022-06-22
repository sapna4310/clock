import { Tooltip } from '@mui/material';

const MyToolTip = function (props) {
  return (
    <Tooltip
      title={props.title}
      placement={props.placement}
      enterDelay={250}
      enterNextDelay={250}
      leaveDelay={200}
    >
      {props.children}
    </Tooltip>
  );
};

export default MyToolTip;
