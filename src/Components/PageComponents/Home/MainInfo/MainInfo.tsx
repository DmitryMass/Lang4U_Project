import React from 'react';

import homelogo from '../../../../Assets/Images/home-logo.png';
import Button from '../../../Button/Button';
import { ROUTES } from '../../../Constants/Routes/routes';

import styles from './main-info.module.scss';

const MainInfo = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main__info}>
        <p className={styles.main__company}>Language for you</p>
        <h1 className={styles.main__title}>Онлайн-школа іноземних мов</h1>
        <p className={styles.main__subtitle}>
          Досягни своєї мети за допомогою кращих методик від носіів мов
        </p>
        <Button
          children='Спробувати безкоштовно'
          route={ROUTES.REGISTRATION}
          modificator={'main__free'}
        />
      </div>
      <div className={styles.main__object}>
        <object data={homelogo} type='' aria-label='main-picture' />
      </div>
    </main>
  );
};

export default MainInfo;
