import React, { FC } from 'react';

import styles from './user-course.module.scss';

interface IEachCourse {
  item: any;
}

const EachCourse: FC<IEachCourse> = ({ item }) => {
  return (
    <div className={styles.course}>
      <h3 className={styles.course__title}>English Elementary</h3>
      <p className={styles.course__subtitle}>Заняття</p>
      <div>
        <a
          target={'_blank'}
          className={styles.course__course}
          href='https://www.youtube.com/'
        >
          1
        </a>
        <a
          target={'_blank'}
          className={styles.course__course}
          href='https://www.youtube.com/'
        >
          2
        </a>
        <a
          target={'_blank'}
          className={styles.course__course}
          href='https://www.youtube.com/'
        >
          3
        </a>
        <a
          target={'_blank'}
          className={styles.course__course}
          href='https://www.youtube.com/'
        >
          4
        </a>
        <a
          target={'_blank'}
          className={styles.course__course}
          href='https://www.youtube.com/'
        >
          5
        </a>
      </div>
      <p className={styles.course__info}>
        Заняття з викладачем відбувається індивідуально. Викладач сам визначає
        час проведення та інформує про це студента за 5 днів.
      </p>
      <div className={styles.course__links}>
        <a target={'_blank'} href='https://www.youtube.com/'>
          Домашка
        </a>
        <a target={'_blank'} href='https://www.youtube.com/'>
          Доповнення
        </a>
      </div>
    </div>
  );
};

export default EachCourse;
