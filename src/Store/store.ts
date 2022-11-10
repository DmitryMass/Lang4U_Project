import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { loginApi, logoutApi, registrationApi } from './Api-Query/Auth/auth';
import { courseApi } from './Api-Query/Courses/courses';
import { firstLessonApi } from './Api-Query/FirstLesson/firstLesson';
import { supportApi } from './Api-Query/Support/Support';
import { userApi } from './Api-Query/User/user';
import { authSliceReducer, modalSliceReducer } from './Slices/authSlice';
import { filterSliceReducer } from './Slices/filterPanelSlice';
import { userCourseReducer } from './Slices/userCoursesSlice';

const store = configureStore({
  reducer: {
    filterSlice: filterSliceReducer,
    userToken: authSliceReducer,
    modal: modalSliceReducer,
    userCourse: userCourseReducer,
    [registrationApi.reducerPath]: registrationApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [logoutApi.reducerPath]: logoutApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
    [firstLessonApi.reducerPath]: firstLessonApi.reducer,
    [supportApi.reducerPath]: supportApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      registrationApi.middleware,
      loginApi.middleware,
      logoutApi.middleware,
      courseApi.middleware,
      firstLessonApi.middleware,
      supportApi.middleware,
      userApi.middleware
    ),
});

setupListeners(store.dispatch);

export default store;
export type TypeRootState = ReturnType<typeof store.getState>;
