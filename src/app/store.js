import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from '../components/comments/commentsSlice';
import { loadState } from './browser-storage';

export const store = configureStore({
  devTools: true,
  reducer: {
    comments: commentsReducer,
  },
  preloadedState: loadState(),
});
