import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  user:
    (localStorage.user && JSON.parse(localStorage.user)) ||
    (localStorage.admin && JSON.parse(localStorage.admin)),
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
    loginSuccess: (state) => {
      state.user = true;
    },
    logoutUser: (state) => {
      state.user = false;
    },
  },
});

export const authSliceAction = authSlice.actions;
export const authSliceReducer = authSlice.reducer;

const modalInitialState = {
  modal: false,
};
export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: modalInitialState,
  reducers: {
    showModal: (state) => {
      state.modal = true;
    },
    handleCancel: (state) => {
      state.modal = false;
    },
  },
});

export const modalSliceAction = modalSlice.actions;
export const modalSliceReducer = modalSlice.reducer;
