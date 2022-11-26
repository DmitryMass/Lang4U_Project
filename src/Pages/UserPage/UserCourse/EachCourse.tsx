import React, { FC } from 'react';
import ICoursesList from '../../../Types/courses-list-types';

import { useTranslation } from 'react-i18next';
import styles from './user-course.module.scss';

interface IEachCourse {
  elem: ICoursesList;
}

const EachCourse: FC<IEachCourse> = ({ elem }) => {
  const { t } = useTranslation();

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
      <h3 className={styles.course__title}>{t(title)}</h3>
      <p className={styles.course__subtitle}>{t('lessons')}</p>
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
      <p className={styles.course__info}>{t('teacherLesson')}</p>
      <div className={styles.course__links}>
        <a target={'_blank'} href='https://www.youtube.com/' rel='noreferrer'>
          {t('homework')} {task}
        </a>
        <a target={'_blank'} href='https://www.youtube.com/' rel='noreferrer'>
          {t('additional')}
        </a>
      </div>
    </div>
  );
};

export default EachCourse;
