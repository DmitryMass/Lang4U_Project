import React, { FC, memo } from 'react';
import TypeButton from '../../../Button/TypeButton/TypeButton';
import styles from './list-of-courses.module.scss';
import ICoursesList from '../../../../Types/courses-list-types';
import useTypedSelector from '../../../../Store/hooks-store/useTypedSelector';
import { useAdminActions } from '../../../hooks/useAdminActions';

const ListOfCourses: FC = () => {
  const { courses } = useTypedSelector((state) => state.filterSlice);
  const { handleDelete } = useAdminActions();

  return (
    <>
      <div className={styles.course__wrapper}>
        {courses?.map((item: ICoursesList) => {
          const { title, modules, duration, lessons, task, tests, expert, id } =
            item;
          return (
            <div key={id} className={styles.course}>
              <div>
                <p
                  className={`${styles.list__item} ${styles.list__item__title}`}
                >
                  {title}
                </p>
                <div className={styles.course__list}>
                  <p className={styles.list__item}>Модулі: {modules}</p>
                  <p className={styles.list__item}>Тривалість:{duration}</p>
                </div>
                <div className={styles.course__list}>
                  <p className={styles.list__item}>Занять: {lessons}</p>
                  <p className={styles.list__item}>Тестів: {tests}</p>
                </div>
                <div className={styles.course__list}>
                  <p className={styles.list__item}>Завдань: {task}</p>
                  <p className={styles.list__item}>З експертом: {expert}</p>
                </div>
              </div>
              <div>
                <TypeButton modificator='edit__btn' type='submit'>
                  Змінити
                </TypeButton>
                <TypeButton
                  handleClick={() => handleDelete(id)}
                  modificator='delete__btn'
                >
                  Видалити
                </TypeButton>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default memo(ListOfCourses);
