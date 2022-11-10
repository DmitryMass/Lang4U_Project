import React, { FC } from 'react';
import ICoursesList from '../../../Types/courses-list-types';

import styles from './user-course.module.scss';

interface IEachCourse {
  elem: ICoursesList;
}

const EachCourse: FC<IEachCourse> = ({ elem }) => {
  const { title, task, logo } = elem;
  const lessonArr = [
    {
      id: '1',
      link: 'https://www.youtube.com/',
    },
    {
      id: '2',
      link: 'https://www.youtube.com/',
    },
    {
      id: '3',
      link: 'https://www.youtube.com/',
    },
    {
      id: '4',
      link: 'https://www.youtube.com/',
    },
  ];

  return (
    <div className={styles.course}>
      <object
        className={styles.course__logo}
        data={logo}
        type=''
        aria-label='courselogo'
      />
      <h3 className={styles.course__title}>{title}</h3>
      <p className={styles.course__subtitle}>Заняття</p>
      <div>
        {lessonArr.map((item) => (
          <a
            key={item.id}
            target={'_blank'}
            rel='noreferrer'
            className={styles.course__course}
            href={item.link}
          >
            {item.id}
          </a>
        ))}
      </div>
      <p className={styles.course__info}>
        Заняття з викладачем відбувається індивідуально. Викладач сам визначає
        час проведення та інформує про це студента за 5 днів.
      </p>
      <div className={styles.course__links}>
        <a target={'_blank'} href='https://www.youtube.com/' rel='noreferrer'>
          Домашніх {task}
        </a>
        <a target={'_blank'} href='https://www.youtube.com/' rel='noreferrer'>
          Доповнення
        </a>
      </div>
    </div>
  );
};

export default EachCourse;
