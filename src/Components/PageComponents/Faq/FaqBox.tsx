import React from 'react';

import boySupport from '../../../Assets/Images/question-man.png';
import Button from '../../Button/Button';
import { ROUTES } from '../../Constants/Routes/routes';
import MainTitle from '../../Text/Titles/MainTitle';

import styles from './faq-box.module.scss';

const FaqBox = () => {
  return (
    <section className={styles.faqBox}>
      <div className={styles.faqBox__img}>
        <img src={boySupport} alt='boy support' />
      </div>
      <div className={styles.faqBox__info}>
        <MainTitle modificator='contacts__title'>
          Ми завжди раді допомогти!
        </MainTitle>
        <p className={styles.faqBox__subtitle}>
          Звертайтеся до нашої команди підтримки студентів з будь-яких питань.
        </p>
        <Button route={ROUTES.SUPPORT} modificator='main__free'>
          Задати питання
        </Button>
      </div>
    </section>
  );
};

export default FaqBox;
