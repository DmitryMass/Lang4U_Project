import React, { FC } from 'react';
import { IHeaderLinks } from '../../Types/header-links-types';
import { headerLinks } from '../Constants/Header-Nav/header-links';
import HeaderDD from '../DropDowns/Header-DD/header-dd';
import LangBtn from '../Lang/LangBtn/LangBtn';
import Logo from '../Logo/Logo';
import Nav from '../Navigation/Nav';
import AuthUser from './AuthUser';
import Burger from './Burger/Burger';
import HeaderNavItem from './Header-Nav/HeaderNavItem';

import styles from './header.module.scss';

const Header: FC = () => {
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
            <HeaderDD type={true} />
          </div>
        </nav>
        <div className={styles.header__dd}>
          <HeaderDD type={false} />
          <Burger />
        </div>
        <div className={styles.header__btns}>
          <AuthUser modificator='header__login' />
        </div>
        <LangBtn />
      </header>
    </div>
  );
};

export default Header;
