import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { filterSliceAction } from '../Slices/filterPanelSlice';
import { authSliceAction, modalSliceAction } from '../Slices/authSlice';

const actions = {
  ...filterSliceAction,
  ...authSliceAction,
  ...modalSliceAction,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};

export default useActions;
