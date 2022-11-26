import React, { FC } from 'react';

import faq from '../../Assets/Images/faq.png';

import Button from '../Button/Button';
import { ROUTES } from '../Constants/Routes/routes';
import FaqComponent from '../PageComponents/Faq/FaqComponent';
import MainTitle from '../Text/Titles/MainTitle';
import { useTranslation } from 'react-i18next';

import styles from './faq-section.module.scss';

const FaqSection: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqSection__box}>
        <div className={styles.faqSection__answer}>
          <MainTitle modificator='faqSection__title'>{t('faqTitle')}</MainTitle>
          <Button
            modificator={'main__free'}
            route={ROUTES.CONTACTS}
            children={`${t('ask')}`}
          />
        </div>
        <div className={styles.faqSection__img}>
          <img src={faq} alt='questionMark' />
        </div>
      </div>
      <div className={styles.faqSection__collapse}>
        <FaqComponent />
      </div>
    </section>
  );
};

export default FaqSection;
