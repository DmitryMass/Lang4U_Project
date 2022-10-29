import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../../Components/Button/Button';
import { coursesList } from '../../../Components/Constants/Courses/courses';
import FirstLesson from '../../../Components/FirstLesson/FirstLesson';
import CourseSwiperItem from '../../../Components/Swiper/CourseSwiper/CourseSwiperItem/CourseSwiperItem';
import MainTitle from '../../../Components/Text/Titles/MainTitle';
import AboutCourse from './AboutCourse/AboutCourse';

import styles from './courses-item.module.scss';

type TCoursesItemParams = {
  id?: string;
};

const CoursesItem = () => {
  const { id } = useParams<TCoursesItemParams>();
  const filteredCourses = coursesList
    .filter((item) => item.link.split(' ').pop() === id?.split(' ').pop())
    .filter((item) => item.link !== id);
  const { color, tests, task, lessons, expert, price, logo, title } =
    coursesList.filter((item) => item.link === id)[0];

  return (
    <div className={styles.item__container}>
      <div className={styles.item__about}>
        <div className={styles.about__container}>
          <AboutCourse title={title} />
        </div>
        <div className={`${styles.item__course} ${color}`}>
          <div className={styles.item__priceWrapper}>
            <div>
              <p className={styles.item__priceTitle}>Вартість</p>
              <p className={styles.item__price}>{price}</p>
            </div>
            <div>
              <object
                className={styles.item__logo}
                data={logo}
                type=''
                aria-label='obj'
              />
            </div>
          </div>
          <div className={styles.item__infoWrapper}>
            <p className={styles.item__info}>
              {lessons} <span>Уроків</span>
            </p>
            <p className={styles.item__info}>
              {task} <span>Завдань</span>
            </p>
            <p className={styles.item__info}>
              {tests} <span>Тестів</span>
            </p>
            <p className={styles.item__info}>
              {expert} <span>Занять із експертом</span>
            </p>
          </div>
          <Button modificator={'course__item'} route={'/'}>
            Записатися на курс
          </Button>
        </div>
      </div>
      <MainTitle modificator='contacts__title'>Схожі курси</MainTitle>
      <div className={styles.item__similar}>
        {filteredCourses.map((item) => (
          <CourseSwiperItem key={item.title} item={item} />
        ))}
      </div>
      <FirstLesson />
    </div>
  );
};

export default CoursesItem;
