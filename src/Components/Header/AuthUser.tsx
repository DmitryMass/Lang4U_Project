import React, { FC } from 'react';
import useTypedSelector from '../../Store/hooks-store/useTypedSelector';
import Button from '../Button/Button';
import { ROUTES } from '../Constants/Routes/routes';
import useModal from '../hooks/modal';
import useLogout from '../hooks/useLogout';
import userLogo from '../../Assets/Icons/user.svg';

interface IAuthUser {
  modificator: string;
}

const AuthUser: FC<IAuthUser> = ({ modificator }) => {
  const { user } = useTypedSelector((state) => state.userToken);
  const { handleLogout } = useLogout();
  const { handleCancel } = useModal();
  return (
    <>
      {user ? (
        <>
          <Button
            children={'Вийти'}
            modificator={modificator}
            route={ROUTES.HOME}
            handleClick={() => {
              modificator === 'burger__login' && handleCancel();
              handleLogout();
            }}
          />
          <Button
            children={
              <object
                width={25}
                height={25}
                data={userLogo}
                type=''
                aria-label='user-logo'
              />
            }
            modificator={modificator}
            route={localStorage.user ? ROUTES.USERPAGE : ROUTES.ADMIN}
            handleClick={() => {
              modificator === 'burger__login' && handleCancel();
            }}
          />
        </>
      ) : (
        <Button
          children={'Увійти'}
          modificator={modificator}
          route={ROUTES.LOGIN}
          handleClick={() => {
            modificator === 'burger__login' && handleCancel();
          }}
        />
      )}
    </>
  );
};

export default AuthUser;
