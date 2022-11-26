import React, { FC } from 'react';

import boySupport from '../../../Assets/Images/question-man.png';
import Button from '../../Button/Button';
import { ROUTES } from '../../Constants/Routes/routes';
import MainTitle from '../../Text/Titles/MainTitle';
import { useTranslation } from 'react-i18next';

import styles from './faq-box.module.scss';

const FaqBox: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.faqBox}>
      <div className={styles.faqBox__img}>
        <img src={boySupport} alt='boy support' />
      </div>
      <div className={styles.faqBox__info}>
        <MainTitle modificator='contacts__title'>{t('faqBoxTitle')}</MainTitle>
        <p className={styles.faqBox__subtitle}>{t('faqBoxContact')}</p>
        <Button route={ROUTES.SUPPORT} modificator='main__free'>
          {t('faqSendQuestion')}
        </Button>
      </div>
    </section>
  );
};

export default FaqBox;
