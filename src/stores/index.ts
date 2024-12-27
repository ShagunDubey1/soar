import { configureStore } from '@reduxjs/toolkit';
import { authReducer, pageSearchFilterReducer } from '../features';

const store = configureStore({
  reducer: {
    auth: authReducer,
    pageFilter: pageSearchFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
