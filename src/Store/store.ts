import { configureStore } from '@reduxjs/toolkit';
import { filterSliceReducer } from './Slices/filterPanelSlice';

const store = configureStore({
  reducer: {
    filterSlice: filterSliceReducer,
  },
});

export default store;
export type TypeRootState = ReturnType<typeof store.getState>;
