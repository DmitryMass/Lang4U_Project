import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ICourseList from '../../Types/courses-list-types';

interface IInitialState {
  courses: ICourseList[] | [];
  filteredCourses: [] | ICourseList[];
}

const initialState: IInitialState = {
  courses: [],
  filteredCourses: [],
};

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    getCourses: (state, action: PayloadAction<ICourseList[]>) => {
      state.courses = action.payload;
    },
    filterCategory: (state, action: PayloadAction<string>) => {
      state.filteredCourses =
        action.payload === 'Всі'
          ? state.courses
          : state.courses.filter(
              (item: ICourseList) => item.title.split(' ')[0] === action.payload
            );
    },
  },
});

export const filterSliceAction = filterSlice.actions;
export const filterSliceReducer = filterSlice.reducer;
