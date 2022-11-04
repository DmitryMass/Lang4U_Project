import React, { FC, useCallback } from 'react';
import useTypedSelector from '../../../../Store/hooks-store/useTypedSelector';
import TypeButton from '../../../Button/TypeButton/TypeButton';
import { useDeleteCourseMutation } from '../../../../Store/Api-Query/Courses/courses';
import { Modal } from 'antd';

import styles from './list-of-courses.module.scss';

const ListOfCourses: FC = () => {
  const { courses } = useTypedSelector((state) => state.filterSlice);
  const [deleteCourse, { isSuccess, isError }] = useDeleteCourseMutation();

  const success = useCallback(() => {
    Modal.success({
      title: 'Успішно видалено !',
    });
  }, []);

  const error = useCallback(() => {
    Modal.error({
      title: 'Виникла помилка спробуй пізніше..',
    });
  }, []);

  const handleDelete = async (id: string | number) => {
    try {
      await deleteCourse(id);
      // window.location.reload();
    } catch (e) {
      // window.location.reload();
    }
  };

  console.log(isError, isSuccess);

  return (
    <>
      {isSuccess && success()}
      {isError && error()}
      <div className={styles.course__wrapper}>
        {courses.map((item) => {
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

export default ListOfCourses;
