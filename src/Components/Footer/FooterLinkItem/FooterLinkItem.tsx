import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IFooterEducation, IFooterInfo } from '../../../Types/footer-links';

import styles from './footer-link-item.module.scss';

interface IFooterLinkItemProps {
  elem: IFooterEducation | IFooterInfo;
  handleClick?: () => void;
}

const FooterLinkItem: FC<IFooterLinkItemProps> = ({ elem }) => {
  const { link, title } = elem;
  return (
    <Link className={styles.footer__link} to={link}>
      {title}
    </Link>
  );
};

export default FooterLinkItem;
