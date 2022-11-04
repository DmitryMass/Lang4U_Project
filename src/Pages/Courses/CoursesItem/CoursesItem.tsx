import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../../Components/Button/Button';
import AlertComponent from '../../../Components/Error/ErrorComponent';
import FirstLesson from '../../../Components/FirstLesson/FirstLesson';
import CourseSwiperItem from '../../../Components/Swiper/CourseSwiper/CourseSwiperItem/CourseSwiperItem';
import MainTitle from '../../../Components/Text/Titles/MainTitle';
import { useGetOneCourseQuery } from '../../../Store/Api-Query/Courses/courses';
import useTypedSelector from '../../../Store/hooks-store/useTypedSelector';
import ICoursesList from '../../../Types/courses-list-types';
import AboutCourse from './AboutCourse/AboutCourse';

import styles from './courses-item.module.scss';

type TCoursesItemParams = {
  id?: string;
};

const CoursesItem = () => {
  const { id } = useParams<TCoursesItemParams>();
  const { data = {}, isLoading, isError } = useGetOneCourseQuery(id);
  const { courses } = useTypedSelector((state) => state.filterSlice);

  const filteredCourses = courses
    .filter(
      (item: ICoursesList) =>
        item.link.split(' ').pop() === id?.split(' ').pop()
    )
    .filter((item: ICoursesList) => item.link !== id);

  return (
    <div className={styles.item__container}>
      <div className={styles.item__about}>
        {isError && (
          <AlertComponent type='error' message='Вибачте сервер збожеволів.' />
        )}
        {isLoading ? (
          <AlertComponent message='Очікуйте будь-ласка.' type='warning' />
        ) : (
          <>
            <div className={styles.about__container}>
              <AboutCourse title={data?.title} />
            </div>
            <div className={`${styles.item__course} ${data?.color}`}>
              <div className={styles.item__priceWrapper}>
                <div>
                  <p className={styles.item__priceTitle}>Вартість</p>
                  <p className={styles.item__price}>{data?.price}</p>
                </div>
                <div>
                  <object
                    className={styles.item__logo}
                    data={data?.logo}
                    type=''
                    aria-label='obj'
                  />
                </div>
              </div>
              <div className={styles.item__infoWrapper}>
                <p className={styles.item__info}>
                  {data?.lessons} <span>Уроків</span>
                </p>
                <p className={styles.item__info}>
                  {data?.task} <span>Завдань</span>
                </p>
                <p className={styles.item__info}>
                  {data?.tests} <span>Тестів</span>
                </p>
                <p className={styles.item__info}>
                  {data?.expert} <span>Занять із експертом</span>
                </p>
              </div>
              <Button modificator={'course__item'} route={'/'}>
                Записатися на курс
              </Button>
            </div>
          </>
        )}
      </div>
      <MainTitle modificator='contacts__title'>Схожі курси</MainTitle>
      <div className={styles.item__similar}>
        {filteredCourses.map((item: ICoursesList) => (
          <CourseSwiperItem key={item.title} item={item} />
        ))}
      </div>
      <FirstLesson />
    </div>
  );
};

export default CoursesItem;
