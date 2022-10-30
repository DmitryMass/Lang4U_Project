import React, { FC } from 'react';
import Logo from '../../Components/Logo/Logo';
import MainTitle from '../../Components/Text/Titles/MainTitle';

import styles from './auth.module.scss';

interface IAuthProps {
  children: React.ReactElement;
  title: string;
  image: string | object;
  flex: string;
}

const Auth: FC<IAuthProps> = ({ children, title, image, flex }) => {
  return (
    <section className={styles.auth}>
      <div className={styles.auth__container}>
        <div className={styles.auth__logo}>
          <Logo />
          <MainTitle modificator='contacts__title'>{title}</MainTitle>
        </div>
        <div className={flex}>
          <div className={styles.auth__form}>{children}</div>
          <div className={styles.auth__img}>
            <img src={image as string} alt='login' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
