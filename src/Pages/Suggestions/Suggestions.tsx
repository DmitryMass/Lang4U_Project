import React, { FC } from 'react';
import SupportForm from '../../Components/Form/Support/SupportForm';

import SuggestionInfo from '../../Components/PageComponents/Suggestions/SuggestionInfo';
import suggImg from '../../Assets/Images/suggestions.png';

import styles from './suggestions.module.scss';

const Suggestions: FC = () => {
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
          <h2 className={styles.suggestions__formTitle}>
            Написати до служби підтримки
          </h2>
          <p className={styles.suggestions__formSubtitle}>
            Залишіть заявку і ми постараємося вам допомогти
          </p>
        </div>
        <SupportForm />
      </div>
    </section>
  );
};

export default Suggestions;
