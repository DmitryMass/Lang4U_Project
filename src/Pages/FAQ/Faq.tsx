import React, { FC } from 'react';
import FaqBox from '../../Components/PageComponents/Faq/FaqBox';
import FaqComponent from '../../Components/PageComponents/Faq/FaqComponent';
import MainTitle from '../../Components/Text/Titles/MainTitle';
import { useTranslation } from 'react-i18next';

import styles from './faq.module.scss';

const Faq: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.faq__container}>
      <MainTitle modificator='contacts__title'>{t('faq')}</MainTitle>
      <p className={styles.faq__subtitle}>{t('faqSubtitle')}</p>
      <FaqComponent />
      <FaqBox />
    </div>
  );
};

export default Faq;
