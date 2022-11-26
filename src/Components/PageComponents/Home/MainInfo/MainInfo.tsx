import React from 'react';

import homelogo from '../../../../Assets/Images/home-logo.png';
import Button from '../../../Button/Button';
import { ROUTES } from '../../../Constants/Routes/routes';
import MainTitle from '../../../Text/Titles/MainTitle';
import { useTranslation } from 'react-i18next';

import styles from './main-info.module.scss';

const MainInfo = () => {
  const { t } = useTranslation();

  return (
    <main className={styles.main}>
      <div className={styles.main__info}>
        <p className={styles.main__company}>Language for you</p>
        <MainTitle modificator='main__title'>{t('homeTitle')}</MainTitle>
        <p className={styles.main__subtitle}>{t('homeSubTitle')}</p>
        <Button
          children={`${t('tryToFree')}`}
          route={ROUTES.REGISTRATION}
          modificator={'main__free'}
        />
      </div>
      <div className={styles.main__object}>
        <img src={homelogo} alt='homelogo' />
      </div>
    </main>
  );
};

export default MainInfo;
