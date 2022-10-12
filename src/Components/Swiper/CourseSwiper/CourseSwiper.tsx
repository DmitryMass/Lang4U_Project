import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';

import styles from './course-swiper.module.scss';
import { coursesList } from '../../Constants/Courses/courses';
import CourseSwiperItem from './CourseSwiperItem/CourseSwiperItem';
import Button from '../../Button/Button';
import { ROUTES_COURSE } from '../../Constants/Routes/routes';

const CourseSwiper = () => {
  return (
    <section className={styles.course__swiper}>
      <div className={styles.course__wrapper}>
        <h2 className={styles.course__title}>
          Курси іноземної мови для будь-якого рівня
        </h2>
        <Button
          children='Всі курси'
          route={ROUTES_COURSE.allCourses}
          modificator={styles.course__courses}
        />
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
        spaceBetween={60}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className='mySwiper'
      >
        {coursesList.map((elem) => (
          <SwiperSlide key={elem.title}>
            <CourseSwiperItem item={elem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default memo(CourseSwiper);
