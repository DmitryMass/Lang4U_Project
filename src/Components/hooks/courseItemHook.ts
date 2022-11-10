import { useDispatch } from 'react-redux';
import { useBindCourseMutation } from '../../Store/Api-Query/Courses/courses';
import { userApi } from '../../Store/Api-Query/User/user';
import useTypedSelector from '../../Store/hooks-store/useTypedSelector';
import ICoursesList from '../../Types/courses-list-types';

export const useCourseItem = (id: string) => {
  const dispatch = useDispatch();
  const [
    bindCourse,
    { isSuccess, isLoading: isBindLoading, isError: isBindError },
  ] = useBindCourseMutation();
  const { courses } = useTypedSelector((state) => state.filterSlice);
  const { user } = useTypedSelector((state) => state.userToken);

  const filteredCourses = courses
    .filter(
      (item: ICoursesList) =>
        item.link.split(' ').pop() === id?.split(' ').pop()
    )
    .filter((item: ICoursesList) => item.link !== id);

  const handleAddedCourse = async () => {
    try {
      if (localStorage.getItem('user')) {
        await bindCourse({ course: id });
        dispatch(userApi.util.resetApiState());
        return;
      }
      alert('Потрібно зареєструватися');
    } catch (e) {
      console.log(e);
    }
  };

  return {
    handleAddedCourse,
    isSuccess,
    isBindError,
    isBindLoading,
    user,
    filteredCourses,
  };
};
