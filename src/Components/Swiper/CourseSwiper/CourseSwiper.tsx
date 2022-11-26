import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper';
import CourseSwiperItem from './CourseSwiperItem/CourseSwiperItem';
import Button from '../../Button/Button';
import { ROUTES } from '../../Constants/Routes/routes';
import MainTitle from '../../Text/Titles/MainTitle';
import useTypedSelector from '../../../Store/hooks-store/useTypedSelector';
import { useGetCourseQuery } from '../../../Store/Api-Query/Courses/courses';
import AlertComponent from '../../Error/ErrorComponent';
import { useTranslation } from 'react-i18next';

import styles from './course-swiper.module.scss';

const CourseSwiper = () => {
  const { courses } = useTypedSelector((state) => state.filterSlice);
  const { isError } = useGetCourseQuery([]);
  const { t } = useTranslation();

  return (
    <section className={styles.course__swiper}>
      <div className={styles.course__wrapper}>
        <MainTitle modificator='courses__title'>
          {t('homeCourseTitle')}
        </MainTitle>
        <Button
          children={`${t('allCourses')}`}
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
        {isError && (
          <AlertComponent type='error' message={`${t('courseWarning')}`} />
        )}
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
