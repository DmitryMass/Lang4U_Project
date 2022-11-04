import { Modal } from 'antd';
import {
  useCreateCourseMutation,
  useDeleteCourseMutation,
} from '../../Store/Api-Query/Courses/courses';
import { IAdminCourse } from '../Form/AdminForm/AdminForm';

export const useAdminActions = () => {
  const [createCourse] = useCreateCourseMutation();
  const [deleteCourse] = useDeleteCourseMutation();

  const success = () => {
    Modal.success({
      title: 'Успіх !',
    });
  };
  const error = () => {
    Modal.error({
      title: 'Виникла помилка спробуй пізніше..',
    });
  };

  const handleDelete = async (id: string | number) => {
    try {
      const data: any = await deleteCourse(id);
      data?.error?.error ? error() : success();
    } catch (e) {
      console.log('some error');
    }
  };

  const formikHandleSubmit = async (
    values: IAdminCourse,
    { resetForm }: any
  ) => {
    try {
      const data: any = await createCourse({ ...values });
      data?.error?.error ? error() : success();
    } catch (e) {
      console.log(e);
    }

    resetForm();
  };

  return {
    handleDelete,
    formikHandleSubmit,
  };
};
