interface IInitalState {
  email: string;
  name: string;
  message: string;
}

export const useSupport = () => {
  const formikHandleSubmit = (values: IInitalState, { resetForm }: any) => {
    console.log({ ...values, name: values.name.replace(/\s+/g, ' ').trim() });
    resetForm();
  };

  return {
    formikHandleSubmit,
  };
};
