import { createSlice } from '@reduxjs/toolkit';

export interface LoginPopupState {
  isOpen: boolean;
}

const initialState: LoginPopupState = {
  isOpen: false,
};

const loginPopupSlice = createSlice({
  name: 'loginPopup',
  initialState,
  reducers: {
    openLoginPopup: (state) => {
      state.isOpen = true;
    },
    closeLoginPopup: (state) => {
      state.isOpen = false;
    },
    toggleLoginPopup: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openLoginPopup, closeLoginPopup, toggleLoginPopup } =
  loginPopupSlice.actions;
export default loginPopupSlice.reducer;
