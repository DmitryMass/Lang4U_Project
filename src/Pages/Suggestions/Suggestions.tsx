import React, { FC } from 'react';
import SupportForm from '../../Components/Form/Support/SupportForm';

import SuggestionInfo from '../../Components/PageComponents/Suggestions/SuggestionInfo';
import suggImg from '../../Assets/Images/suggestions.png';
import { useTranslation } from 'react-i18next';

import styles from './suggestions.module.scss';

const Suggestions: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.suggestions}>
      <div className={styles.suggestions__container}>
        <div className={styles.suggestions__info}>
          <SuggestionInfo />
          <div className={styles.suggestions__img}>
            <img src={suggImg} alt='' />
          </div>
        </div>
        <div>
          <h2 className={styles.suggestions__formTitle}>{t('supportWrite')}</h2>
          <p className={styles.suggestions__formSubtitle}>
            {t('supportRequest')}
          </p>
        </div>
        <SupportForm />
      </div>
    </section>
  );
};

export default Suggestions;
