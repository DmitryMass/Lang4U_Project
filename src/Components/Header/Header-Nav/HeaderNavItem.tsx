import React, { FC, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IHeaderLinks } from '../../../Types/header-links-types';
import { useTranslation } from 'react-i18next';
import styles from './header-nav-item.module.scss';

interface IHeaderNavItemProps {
  elem: IHeaderLinks;
  handleClick?: () => void;
}

const HeaderNavItem: FC<IHeaderNavItemProps> = ({ elem, handleClick }) => {
  const { link, title } = elem;
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const active = useMemo(
    () => (pathname.slice(1) === title ? `${styles.nav__item__active}` : null),
    [pathname, title]
  );

  return (
    <Link
      className={`${styles.nav__item} ${active} `}
      to={link}
      onClick={handleClick}
    >
      {t(title)}
    </Link>
  );
};

export default HeaderNavItem;
