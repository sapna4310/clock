import React, { useState } from 'react';

// Stylesheet import
import classes from './DiscussForm.module.css';

// Icon import from Feather icon
import { Send } from 'react-feather';

// Import Zoom transition from Material UI
import { Zoom } from '@mui/material';

// SuccessIcon import
import SuccessIcon from '../../UI/SuccessIcon';

// Use selector import
import { useSelector } from 'react-redux';

function DiscussForm() {
  const [inputVal, setInputVal] = useState('');
  const [isAcknowledgementActive, setIsAcknowledgementActive] = useState(false);

  // Getting isFocused state for discuss input
  const inputRef = useSelector((state) => state.discussInputReducer.ref);

  // Handler to animate acknowledgement when discuss form submitted
  const submitHandler = (event) => {
    event.preventDefault();
    if (!inputVal) return;
    setIsAcknowledgementActive(true);
    setTimeout(() => {
      setIsAcknowledgementActive(false);
    }, 1000);
    // Updating Data logic here
    setInputVal('');
  };

  // Change handler for disucuss input
  const changeHandler = (event) => {
    setInputVal(event.target.value);
  };

  return (
    <div className={classes.discussContainer}>
      <form
        action="submit"
        className={classes.discussForm}
        onSubmit={submitHandler}
      >
        <input
          ref={inputRef}
          type="text"
          className={classes.discussInput}
          placeholder="Discuss..."
          onChange={changeHandler}
          value={inputVal}
        />
        <div className={classes.acknowledgementContainer}>
          <SuccessIcon checked={isAcknowledgementActive} />
        </div>
        <button type="submit" className={classes.sendBtn}>
          <Zoom in={!isAcknowledgementActive}>
            <Send className={classes.sendIcon} />
          </Zoom>
        </button>
      </form>
    </div>
  );
}

export default DiscussForm;
