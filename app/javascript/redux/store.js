import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetingSlice/greetingSlice';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
