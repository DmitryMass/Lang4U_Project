import React, { FC } from 'react';
import MainTitle from '../../../Components/Text/Titles/MainTitle';
import { useTranslation } from 'react-i18next';

import userinfoImg from '../../../Assets/Images/userinfo.png';
import styles from './user-info.module.scss';

const UserInfo: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.userinfo}>
      <div className={styles.userinfo__wrapper}>
        <MainTitle
          span={<span className='suggestions__span'>Lang4U</span>}
          modificator='userpage__title'
        >
          {t('greeting')}
        </MainTitle>
        <p className={styles.userinfo__subtitle}>{t('achieveTitle')}</p>
      </div>
      <div className={styles.userinfo__img}>
        <img src={userinfoImg} alt='userinfoImg' />
      </div>
    </div>
  );
};

export default UserInfo;
