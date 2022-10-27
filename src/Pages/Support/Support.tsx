import React, { FC } from 'react';

import support from '../../Assets/Images/support.png';
import SupportForm from '../../Components/Form/Support/SupportForm';
import styles from './support.module.scss';

const Support: FC = () => {
  return (
    <section className={styles.support}>
      <div className={styles.support__container}>
        <div>
          hello world
          <SupportForm />
        </div>
        <div className={styles.support__objectWrapper}>
          <object data={support} type=''></object>
        </div>
      </div>
    </section>
  );
};

export default Support;
