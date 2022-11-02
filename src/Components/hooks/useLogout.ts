import { useDispatch } from 'react-redux';
import { useLogoutUserMutation } from '../../Store/Api-Query/Auth/auth';
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
        return;
      }
      if (await localStorage.admin) {
        delete localStorage.admin;
        dispatch(userOut());
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
