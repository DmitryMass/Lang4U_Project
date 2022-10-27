import React from 'react';
import styles from './methodology.module.scss';

import methodologyImg from '../../../../Assets/Images/methodology.jpg';
import MainTitle from '../../../Text/Titles/MainTitle';

interface IMethodologyList {
  text: string;
}

const Methodology = () => {
  return (
    <section className={styles.methodology}>
      <div className={styles.methodology__img}>
        <img src={methodologyImg} alt='Methodology' />
      </div>
      <div className={styles.methodology__info}>
        <MainTitle
          span={<span className={styles.methodology__company}>Lang4U</span>}
          modificator='methodology__title'
        >
          Ефективна методика вивчення мови з
        </MainTitle>
        <span className={styles.methodology__company}>Lang4U</span>
        <ul>
          {methodologyList.map(({ text }) => (
            <li key={text} className={styles.methodology__list}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
const methodologyList: IMethodologyList[] = [
  {
    text: 'Самостійно вибираєте зручний режим та час проходження завдань',
  },
  {
    text: 'Сучасна ефективна методика навчання гарантує освоєння мови на максимально високому рівні за короткий термін',
  },
  {
    text: 'Повна автоматизація дозволяє нам надавати найнижчу ціну - у 2, 3, а то й у 5 разів дешевше за інші мовні школи.',
  },
];

export default Methodology;
