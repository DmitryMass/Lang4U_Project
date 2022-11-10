import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { filterSliceAction } from '../Slices/filterPanelSlice';
import { authSliceAction, modalSliceAction } from '../Slices/authSlice';
import { userCourseAction } from '../Slices/userCoursesSlice';

const actions = {
  ...filterSliceAction,
  ...authSliceAction,
  ...modalSliceAction,
  ...userCourseAction,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};

export default useActions;
