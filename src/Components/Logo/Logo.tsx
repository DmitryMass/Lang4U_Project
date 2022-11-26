import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../Constants/Routes/routes';
import logo from '../../Assets/Icons/lang-logo.png';

import styles from './logo.module.scss';

const Logo: FC = () => {
  return (
    <Link className={styles.logo} to={ROUTES.HOME}>
      <object
        className={styles.logo__obj}
        data={logo}
        type=''
        aria-label='logo'
      />
      Lang4U
    </Link>
  );
};

export default Logo;
