import { configureStore } from '@reduxjs/toolkit';
import authReducer, { AuthState } from './slice/authSlice';
import loginPopupReducer, { LoginPopupState } from './slice/loginPopupSlice';
import userReducer, { UserState } from './slice/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    loginPopup: loginPopupReducer,
  },
});

export type RootState = {
  auth: AuthState;
  user: UserState;
  loginPopup: LoginPopupState;
};
export type AppDispatch = typeof store.dispatch;
