import React, { FC } from 'react';
import useTypedSelector from '../../Store/hooks-store/useTypedSelector';
import { IHeaderLinks } from '../../Types/header-links-types';
import Button from '../Button/Button';
import { headerLinks } from '../Constants/Header-Nav/header-links';
import { ROUTES } from '../Constants/Routes/routes';
import HeaderDD from '../DropDowns/Header-DD/header-dd';
import useLogout from '../hooks/useLogout';
import Logo from '../Logo/Logo';
import Nav from '../Navigation/Nav';
import Burger from './Burger/Burger';
import HeaderNavItem from './Header-Nav/HeaderNavItem';

import styles from './header.module.scss';

const Header: FC = () => {
  const { user } = useTypedSelector((state) => state.userToken);
  const { handleLogout } = useLogout();

  return (
    <div className={`${styles.header__container} ${styles.header__wrapper}`}>
      <header className={styles.header}>
        <nav className={styles.header__navigation}>
          <Logo />
          <div className={styles.navigation__container}>
            <Nav
              modificator={styles.nav__header}
              items={headerLinks}
              renderItems={(item: IHeaderLinks) => (
                <HeaderNavItem elem={item} key={item.link} />
              )}
            />
            <HeaderDD />
          </div>
        </nav>
        <Burger />
        {user ? (
          <Button
            children={'Вийти'}
            modificator={'header__login'}
            route={ROUTES.HOME}
            handleClick={handleLogout}
          />
        ) : (
          <Button
            children={'Увійти'}
            modificator={'header__login'}
            route={ROUTES.LOGIN}
          />
        )}
      </header>
    </div>
  );
};

export default Header;
