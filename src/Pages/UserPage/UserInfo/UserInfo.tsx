import React, { FC } from 'react';
import MainTitle from '../../../Components/Text/Titles/MainTitle';

import userinfoImg from '../../../Assets/Images/userinfo.png';
import styles from './user-info.module.scss';

const UserInfo: FC = () => {
  return (
    <div className={styles.userinfo}>
      <div className={styles.userinfo__wrapper}>
        <MainTitle
          span={<span className='suggestions__span'>Lang4U</span>}
          modificator='userpage__title'
        >
          Ласкаво просимо до
        </MainTitle>
        <p className={styles.userinfo__subtitle}>
          Досягайте своїх цілей за допомогою авторських ігрових методик від
          носіїв мови
        </p>
      </div>
      <div className={styles.userinfo__img}>
        <img src={userinfoImg} alt='userinfoImg' />
      </div>
    </div>
  );
};

export default UserInfo;
