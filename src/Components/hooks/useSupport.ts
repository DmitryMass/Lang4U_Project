import { Modal } from 'antd';
import { useSupportRequestMutation } from '../../Store/Api-Query/Support/Support';

interface IInitalState {
  email: string;
  name: string;
  message: string;
}

export const useSupport = () => {
  const [supportRequest, { isLoading }] = useSupportRequestMutation();

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
      const data: any = await supportRequest({
        ...values,
        message: values.message.trim(),
      });
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
