import { Modal } from 'antd';
import { useUpdateUserInfoMutation } from '../../Store/Api-Query/User/user';

interface IInitialState {
  email: string;
  age: string;
  surname: string;
  name: string;
  city: string;
}
export const useSettings = () => {
  const [updateUserInfo, { isLoading }] = useUpdateUserInfoMutation();

  const handleUpdateUserInfo = async (
    values: IInitialState,
    { resetForm }: any
  ) => {
    try {
      const data: any = await updateUserInfo({
        ...values,
        age: values.age.toString(),
      });
      data?.error?.error ? error() : success();
    } catch (e) {
      console.log(e);
    }
  };

  const success = () => {
    Modal.success({
      title: 'Дані оновлено!',
    });
  };
  const error = () => {
    Modal.error({
      title: 'Виникла помилка спробуй пізніше..',
    });
  };

  return {
    handleUpdateUserInfo,
    isLoading,
  };
};
