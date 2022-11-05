import React, { FC } from 'react';
import MainTitle from '../../../../Components/Text/Titles/MainTitle';

import studyOne from '../../../../Assets/Images/study_one.png';
import studyTwo from '../../../../Assets/Images/stydy_second.png';

import styles from './why-fast.module.scss';

interface IFastList {
  id: number | string;
  title: string;
  desc: string;
  img: string;
}

const WhyFast: FC = () => {
  return (
    <section className={styles.fast}>
      <MainTitle modificator='how__title'>
        Чому ви швидко освоїте мову
      </MainTitle>
      <div className={styles.fast__container}>
        {fastList.map(({ desc, id, img, title }) => (
          <div key={id} className={styles.fast__box}>
            <div className={styles.fast__info}>
              <p className={styles.fast__id}>{id}</p>
              <h3 className={styles.fast__title}>{title}</h3>
              <p className={styles.fast__desc}>{desc}</p>
            </div>
            <div className={styles.fast__img}>
              <img src={img} alt='studyimg' />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const fastList: IFastList[] = [
  {
    id: 1,
    title: 'Цікаві уроки',
    desc: `Короткі, але насичені уроки до 45 хвилин.
        Глибокіший обсяг знань, ніж в інших школах і навіть чим передбачено міжнародними стандартами.`,
    img: `${studyOne}`,
  },
  {
    id: 2,
    title: 'Зручний формат навчання',
    desc: 'Цілком автоматичний процес навчання на одній платформі з доступом на будь-якому пристрої.',
    img: `${studyTwo}`,
  },
];

export default WhyFast;
