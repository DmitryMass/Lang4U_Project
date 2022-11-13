import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { useLogoutUserMutation } from '../../Store/Api-Query/Auth/auth';
import { userApi } from '../../Store/Api-Query/User/user';
import useActions from '../../Store/hooks-store/actions';

const useLogout = () => {
  const dispatch = useDispatch();
  const { logoutUser: userOut } = useActions();
  const [logoutUser] = useLogoutUserMutation();

  const success = () => {
    Modal.success({
      title: 'Гарного Дня, До зустрічі.',
    });
  };

  const error = () => {
    Modal.error({
      title: 'Виникла помилка спробуй пізніше..',
    });
  };

  const handleLogout = async () => {
    try {
      const data: any = await logoutUser(null);
      data?.error?.error ? error() : success();
      if (await localStorage.user) {
        delete localStorage.user;
        dispatch(userOut());
        dispatch(userApi.util.resetApiState());
        return;
      }
      if (await localStorage.admin) {
        delete localStorage.admin;
        dispatch(userOut());
        dispatch(userApi.util.resetApiState());
        return;
      }
      alert('Сталася помилка.');
    } catch (e) {
      console.log(e);
    }
  };

  return {
    handleLogout,
  };
};

export default useLogout;
