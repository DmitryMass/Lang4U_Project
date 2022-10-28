import { useDispatch } from 'react-redux';
import useActions from '../../Store/hooks-store/actions';
import useTypedSelector from '../../Store/hooks-store/useTypedSelector';

const useFilter = () => {
  const dispatch = useDispatch();
  const { filterCategory } = useActions();
  const { filteredCourses } = useTypedSelector((state) => state.filterSlice);

  const chooseCategory = (category: string) => {
    dispatch(filterCategory(category));
  };

  return {
    filteredCourses,
    chooseCategory,
  };
};

export default useFilter;
