import React, { useState } from 'react';

// useDispatch hook import
import { useSelector } from 'react-redux';

// Stylesheet import
import classes from './DiscussElement.module.css';

// Icons import from Feather icon
import { MoreVertical, CornerUpLeft as Reply } from 'react-feather';

// Click away lister import from Material UI
import { ClickAwayListener } from '@mui/material';

// Import disscuss Dropdown
import Dropdown from './Dropdown';

// calcTimeDifference helper function import
import calcTimeDifference from '../../../../HelperFunctions/calcTimeDifference';

function Replies({ data, isReply }) {
  const [isDropdownActive, setDropdownActive] = useState(false);

  const discussInputState = useSelector((state) => state.discussInputReducer);

  const toggleDropdown = () => {
    setDropdownActive(!isDropdownActive);
  };

  const deactivateDropdown = () => {
    setDropdownActive(false);
  };

  const replyHandler = () => {
    discussInputState.ref.current.focus();
  };

  return (
    <div key={data.id} className={`${isReply ? classes.reply : ''}`}>
      <div className={classes.header}>
        <h4 className="element-heading">{data.name}</h4>
        <p className={`element-description ${classes.time}`}>
          {calcTimeDifference(new Date(), data.time)}
        </p>
        <Reply className={classes.replyIcon} onClick={replyHandler} />
        <ClickAwayListener onClickAway={deactivateDropdown}>
          <div className={classes.dropdownContainer}>
            <MoreVertical className={classes.more} onClick={toggleDropdown} />
            {isDropdownActive && <Dropdown />}
          </div>
        </ClickAwayListener>
      </div>
      <p className={`description-text ${classes.discussText}`}>
        {data.repliedTo ? (
          <span className={classes.repliedTo}>{`@${data.repliedTo}`}</span>
        ) : (
          ''
        )}{' '}
        {data.discuss}
      </p>
    </div>
  );
}

export default Replies;
