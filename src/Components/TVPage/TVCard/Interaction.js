import React from 'react';

// Stylesheet import
import classes from './Interaction.module.css';

// Icon import from Feather icon
import {
  MessageSquare as Discuss,
  Share2 as Share,
  Paperclip as Attachments,
} from 'react-feather';

// Reactions component import
import Reactions from './Reactions';

// MyToolTip Component import

import MyToolTip from '../../UI/MyToolTip';
// useDispatch hook import
import { useSelector, useDispatch } from 'react-redux';

// Actions import from Disscuss input action
import {
  activateDiscussInputAction,
  deactivateDiscussInputAction,
} from '../../../Actions/DiscussInputAction';

function Interaction(props) {
  const discussInputState = useSelector((state) => state.discussInputReducer);
  const dispatch = useDispatch();

  const discussIconClickHandler = () => {
    props.toggleDiscussionPanel();

    if (discussInputState.isActive) {
      dispatch(deactivateDiscussInputAction);
    }
    if (!discussInputState.isActive) {
      dispatch(activateDiscussInputAction);
      discussInputState.ref.current.focus();
    }
  };

  return (
    <div className={classes.interactions}>
      <div className={classes.interactionContainer}>
        <Reactions className={classes.reactions} />
        <MyToolTip title="Attachment" placement="top">
          <Attachments className={classes.attachments} />
        </MyToolTip>
        <MyToolTip title="Discussion" placement="top">
          <Discuss
            className={classes.discuss}
            onClick={discussIconClickHandler}
          />
        </MyToolTip>
        <MyToolTip title="Share" placement="top-end">
          <Share className={classes.share} />
        </MyToolTip>
      </div>
      <div className={classes.counterContainer}>
        <p className={classes.reactionCounter}>947K</p>
        <p className={classes.attachmentCounter}>3</p>
        <p className={classes.discussCounter}>423K</p>
        <p className={classes.shareCounter}></p>
      </div>
    </div>
  );
}

export default Interaction;
