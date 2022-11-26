import React, { FC } from 'react';
import { Link } from 'react-router-dom';
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
  return (
    <Link className={styles.nav__item} to={link} onClick={handleClick}>
      {t(title)}
    </Link>
  );
};

export default HeaderNavItem;
