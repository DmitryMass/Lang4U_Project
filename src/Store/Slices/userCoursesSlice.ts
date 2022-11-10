import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ICoursesList from '../../Types/courses-list-types';

interface IInitialState {
  userCourse: ICoursesList[] | [];
}

const initialState: IInitialState = {
  userCourse: [],
};

export const userCourse = createSlice({
  name: 'userCourse',
  initialState,
  reducers: {
    saveCourse: (state, action: PayloadAction<ICoursesList[]>) => {
      state.userCourse = action.payload;
    },
    clearCourse: (state, action: PayloadAction<[]>) => {
      state.userCourse = action.payload;
    },
  },
});

export const userCourseAction = userCourse.actions;
export const userCourseReducer = userCourse.reducer;
