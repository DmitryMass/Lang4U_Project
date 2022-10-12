import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IHeaderLinks } from '../../../Types/header-links-types';

import styles from './header-nav-item.module.scss';

interface IHeaderNavItemProps {
  elem: IHeaderLinks;
  handleClick?: () => void;
}

const HeaderNavItem: FC<IHeaderNavItemProps> = ({ elem, handleClick }) => {
  const { link, title } = elem;
  return (
    <Link className={styles.nav__item} to={link} onClick={handleClick}>
      {title}
    </Link>
  );
};

export default HeaderNavItem;
