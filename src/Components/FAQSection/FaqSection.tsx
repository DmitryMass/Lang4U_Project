import React, { FC } from 'react';

import faq from '../../Assets/Images/faq.png';

import Button from '../Button/Button';
import { ROUTES } from '../Constants/Routes/routes';
import FaqComponent from '../PageComponents/Faq/FaqComponent';
import MainTitle from '../Text/Titles/MainTitle';
import styles from './faq-section.module.scss';

const FaqSection: FC = () => {
  return (
    <section className={styles.faqSection}>
      <div className={styles.faqSection__box}>
        <div className={styles.faqSection__answer}>
          <MainTitle modificator='faqSection__title'>
            Відповідаємо на часті запитання
          </MainTitle>
          <Button
            modificator={'main__free'}
            route={ROUTES.CONTACTS}
            children={'Задати питання'}
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
