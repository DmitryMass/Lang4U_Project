import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { loginApi, logoutApi, registrationApi } from './Api-Query/Auth/auth';
import { authSliceReducer, modalSliceReducer } from './Slices/authSlice';
import { filterSliceReducer } from './Slices/filterPanelSlice';

const store = configureStore({
  reducer: {
    filterSlice: filterSliceReducer,
    userToken: authSliceReducer,
    modal: modalSliceReducer,
    [registrationApi.reducerPath]: registrationApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [logoutApi.reducerPath]: logoutApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      registrationApi.middleware,
      loginApi.middleware,
      logoutApi.middleware
    ),
});

setupListeners(store.dispatch);

export default store;
export type TypeRootState = ReturnType<typeof store.getState>;
