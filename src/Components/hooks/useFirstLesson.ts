import { Modal } from 'antd';
import { useFirstLessonMutation } from '../../Store/Api-Query/FirstLesson/firstLesson';

interface IInitalState {
  email: string;
  rules: boolean;
}

export const useFirstLesson = () => {
  const [firstLesson, { isLoading }] = useFirstLessonMutation();
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

  const formikHandleSubmit = async (
    values: IInitalState,
    { resetForm }: any
  ) => {
    try {
      const data: any = await firstLesson({ ...values });
      data?.error?.error ? error() : success();
    } catch (e) {
      console.log(e);
    }

    resetForm();
  };

  return {
    formikHandleSubmit,
    isLoading,
  };
};
