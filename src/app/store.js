import { createStore } from '@reduxjs/toolkit';
import rootReducer from '../features/index';

// export default configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

const store = createStore(rootReducer);

export default store;
