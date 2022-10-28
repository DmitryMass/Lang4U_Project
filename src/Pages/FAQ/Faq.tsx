import React, { FC } from 'react';
import FaqBox from '../../Components/PageComponents/Faq/FaqBox';
import FaqComponent from '../../Components/PageComponents/Faq/FaqComponent';
import MainTitle from '../../Components/Text/Titles/MainTitle';

import styles from './faq.module.scss';

const Faq: FC = () => {
  return (
    <div className={styles.faq__container}>
      <MainTitle modificator='contacts__title'>FAQ</MainTitle>
      <p className={styles.faq__subtitle}>Поширені запитання</p>
      <FaqComponent />
      <FaqBox />
    </div>
  );
};

export default Faq;
