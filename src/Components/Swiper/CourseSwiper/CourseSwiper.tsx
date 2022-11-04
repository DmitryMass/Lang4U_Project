import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper';
import CourseSwiperItem from './CourseSwiperItem/CourseSwiperItem';
import Button from '../../Button/Button';
import { ROUTES } from '../../Constants/Routes/routes';
import MainTitle from '../../Text/Titles/MainTitle';
import styles from './course-swiper.module.scss';
import useTypedSelector from '../../../Store/hooks-store/useTypedSelector';

const CourseSwiper = () => {
  const { courses } = useTypedSelector((state) => state.filterSlice);
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
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
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
        modules={[FreeMode, Autoplay]}
        className='mySwiper'
      >
        {courses.map((elem) => (
          <SwiperSlide key={elem.title}>
            <CourseSwiperItem item={elem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default memo(CourseSwiper);
