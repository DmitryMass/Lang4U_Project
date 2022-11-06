import React, { FC } from 'react';
import MainTitle from '../../Text/Titles/MainTitle';

import suggObj from '../../../Assets/Icons/suggestions.svg';
import styles from './suggestion-info.module.scss';

const SuggestionInfo: FC = () => {
  return (
    <div className={styles.suggestions__info}>
      <MainTitle
        span={<span className='suggestions__span'>Lang4U</span>}
        modificator='main__title'
      >
        Пропозиції щодо роботи сайту
      </MainTitle>
      <p className={styles.suggestions__subtitle}>
        Ми завжди готові ставати кращими! Є пропозиції щодо покращення роботи
        сайту? Напишіть нам
      </p>
      <div className={styles.suggestions__box}>
        <div className={styles.suggestions__warning}>
          <object data={suggObj} type='' aria-label='sugg obj' />
          <h3>Загальна інформація</h3>
        </div>
        <p className={styles.suggestions__txt}>
          Тут ми збираємо пропозиції щодо покращення Lang4U.
          <br />
          Якщо ви зіткнулися з технічними труднощами, зв'яжіться з підтримкою
        </p>
        <br />
        <p className={styles.suggestions__txt}>
          Побажання щодо розвитку Lang4U можна залишити тут. <br />
          Побажання щодо додавання на Lang4U курсів, матеріалів, статей можна
          залишити тут.
        </p>
      </div>
    </div>
  );
};

export default SuggestionInfo;
