import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth-slice';
import visionSlice from './slices/vision-page-slice';
import dashboardSlice from './slices/dashboard-page-slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    vision: visionSlice,
    dashboard: dashboardSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;