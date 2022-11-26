import React from 'react';
import { useTranslation } from 'react-i18next';

import methodologyImg from '../../../../Assets/Images/methodology.jpg';
import MainTitle from '../../../Text/Titles/MainTitle';
import styles from './methodology.module.scss';

interface IMethodologyList {
  text: string;
}

const Methodology = () => {
  const { t } = useTranslation();

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
          {t('methodologyTitle')}
        </MainTitle>
        <span className={styles.methodology__company}>Lang4U</span>
        <ul>
          {methodologyList.map(({ text }) => (
            <li key={text} className={styles.methodology__list}>
              {t(text)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
const methodologyList: IMethodologyList[] = [
  {
    text: 'methodologyListFirst',
  },
  {
    text: 'methodologyListSecond',
  },
  {
    text: 'methodologyListThird',
  },
];

export default Methodology;
