import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useActions from '../../Store/hooks-store/actions';

interface IInitalState {
  email: string;
  password: string;
}

export const useSubmit = (auth: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginSuccess } = useActions();

  const formikHandleSubmit = async (
    values: IInitalState,
    { resetForm }: any
  ) => {
    const body = new FormData();
    Object.entries(values).forEach((item) => {
      body.append(item[0], item[1]);
    });
    try {
      const data: any = await auth(body);
      if (data?.data?.message === 'Ok') {
        navigate('/login');
        return;
      }
      alert(data?.error?.data?.message);
    } catch (e) {
      console.log(e);
    }
    resetForm();
  };

  const formikHandleLoginSubmit = async (
    values: IInitalState,
    { resetForm }: any
  ) => {
    const body = new FormData();
    Object.entries(values).forEach((item) => {
      body.append(item[0], item[1]);
    });
    try {
      const data: any = await auth(body);
      if (data?.data?.message === 'Ok') {
        if (data?.data?.role === 'Admin') {
          localStorage.setItem('admin', data?.data?.token);
          dispatch(loginSuccess());
          navigate('/admin');
          return;
        }
        localStorage.setItem('user', data?.data?.token);
        dispatch(loginSuccess());
        navigate('/');
        return;
      }
      alert(data?.error?.data?.message);
    } catch (e) {
      console.log(e);
    }
    resetForm();
  };
  return { formikHandleSubmit, formikHandleLoginSubmit };
};
