import React, { FC } from 'react';

import freeCourse from '../../../../Assets/Images/freeCourse.png';
import MainTitle from '../../../Text/Titles/MainTitle';
import styles from './how-it-works.module.scss';

interface IHowItWorksList {
  id: string;
  title: string;
  desc: string;
  img: string;
}

const HowItWorks: FC = () => {
  return (
    <section className={styles.how}>
      <div className={styles.how__name}>
        <MainTitle modificator='how__title'>Як це працює ?</MainTitle>
      </div>

      <div className={styles.how__wrapper}>
        {howItWorks.map(({ desc, id, img, title }: IHowItWorksList) => {
          return (
            <div key={id} className={styles.how__box}>
              <p className={styles.how__id}>{id}</p>
              <h3 className={styles.how__title}>{title}</h3>
              <p className={styles.how__description}>{desc}</p>
              <img src={img} alt='firstLesson' />
            </div>
          );
        })}
      </div>
    </section>
  );
};

const howItWorks: IHowItWorksList[] = [
  {
    id: '01',
    title: 'Вибір курсу',
    desc: 'Вибирайте потрібний мовний курс, aбо отримайте безкоштовний урок.',
    img: `${freeCourse}`,
  },
  {
    id: '02',
    title: 'Реєстрація',
    desc: 'Після вибору потрібного курсу пройдіть Реєстрацію',
    img: `${freeCourse}`,
  },
  {
    id: '03',
    title: 'Навчання',
    desc: 'Все. У вашому особистому кабінеті буде відкритий доступ до курсу.',
    img: `${freeCourse}`,
  },
];
export default HowItWorks;
