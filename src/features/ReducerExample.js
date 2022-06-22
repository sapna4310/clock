const initialState = 'Example';

const reducerExample = (state = initialState, action) => {
  if (action.type === 'action') {
    return true;
  } else return state;
};

export default reducerExample;
