import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';

import styles from './course-swiper.module.scss';
import { coursesList } from '../../Constants/Courses/courses';
import CourseSwiperItem from './CourseSwiperItem/CourseSwiperItem';

const CourseSwiper = () => {
  return (
    <section className={styles.course__swiper}>
      <Swiper
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
          <SwiperSlide>
            <CourseSwiperItem item={elem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default memo(CourseSwiper);
