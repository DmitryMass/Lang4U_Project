import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';

import { coursesList } from '../../Constants/Courses/courses';
import CourseSwiperItem from './CourseSwiperItem/CourseSwiperItem';
import Button from '../../Button/Button';
import { ROUTES } from '../../Constants/Routes/routes';
import MainTitle from '../../Text/Titles/MainTitle';
import styles from './course-swiper.module.scss';

const CourseSwiper = () => {
  return (
    <section className={styles.course__swiper}>
      <div className={styles.course__wrapper}>
        <MainTitle modificator='courses__title'>
          Курси іноземної мови для будь-якого рівня
        </MainTitle>
        <Button
          children='Всі курси'
          route={ROUTES.COURSES}
          modificator={'course__courses'}
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
