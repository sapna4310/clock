import { createRef } from 'react';

const ref = createRef();

const initialState = { ref, isActive: false };

const discussInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'input-not-focused':
      return { ...state, isActive: false };
    case 'input-is-focused':
      return { ...state, isActive: true };
    default:
      return initialState;
  }
};

export default discussInputReducer;
