import { useDispatch } from 'react-redux';
import { useLogoutUserMutation } from '../../Store/Api-Query/Auth/auth';
import { userApi } from '../../Store/Api-Query/User/user';
import useActions from '../../Store/hooks-store/actions';

const useLogout = () => {
  const dispatch = useDispatch();
  const { logoutUser: userOut } = useActions();
  const [logoutUser] = useLogoutUserMutation();

  const handleLogout = async () => {
    try {
      await logoutUser(null);
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
