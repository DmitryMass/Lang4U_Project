import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import AlertComponent from '../../../Components/Error/ErrorComponent';
import FirstLesson from '../../../Components/FirstLesson/FirstLesson';
import CourseSwiperItem from '../../../Components/Swiper/CourseSwiper/CourseSwiperItem/CourseSwiperItem';
import MainTitle from '../../../Components/Text/Titles/MainTitle';
import { useGetOneCourseQuery } from '../../../Store/Api-Query/Courses/courses';
import ICoursesList from '../../../Types/courses-list-types';
import AboutCourse from './AboutCourse/AboutCourse';
import WhyFast from './WhyFast/WhyFast';

import TypeButton from '../../../Components/Button/TypeButton/TypeButton';
import Loader from '../../../Components/Loader/Loader';
import { useCourseItem } from '../../../Components/hooks/courseItemHook';
import { useTranslation } from 'react-i18next';

import styles from './courses-item.module.scss';

type TCoursesItemParams = {
  id?: any;
};

const CoursesItem: FC = () => {
  const { t } = useTranslation();

  const { id } = useParams<TCoursesItemParams>();
  const { data, isLoading, isError } = useGetOneCourseQuery(id);
  const {
    filteredCourses,
    handleAddedCourse,
    isBindError,
    isBindLoading,
    isSuccess,
    user,
  } = useCourseItem(id);

  let boxColor = isLoading ? `${styles.data__color}` : data?.color;
  return (
    <div className={styles.item__container}>
      <div className={styles.item__about}>
        {isError && (
          <AlertComponent type='error' message={`${t('courseWarning')}`} />
        )}
        <div className={styles.about__container}>
          <AboutCourse isLoading={isLoading} title={data?.title} />
        </div>
        <div className={`${styles.item__course} ${boxColor}`}>
          <div className={styles.item__priceWrapper}>
            <div>
              <p className={styles.item__priceTitle}>{t('price')}</p>
              <p className={styles.item__price}>
                {data?.price
                  ? `${t('priceFrom')} ${data?.price} ${t('uah')}`
                  : '0000'}
              </p>
            </div>
            <div>
              {data?.logo ? (
                <object
                  className={styles.item__logo}
                  data={data?.logo}
                  type=''
                  aria-label='obj'
                />
              ) : (
                <div className={styles.logo__preview}>
                  <Loader />
                </div>
              )}
            </div>
          </div>
          <div className={styles.item__infoWrapper}>
            <p className={styles.item__info}>
              {data?.lessons ? data?.lessons : '00'}{' '}
              <span>{t('homeCourseLessons')}</span>
            </p>
            <p className={styles.item__info}>
              {data?.task ? data?.task : '00'} <span>{t('tasks')}</span>
            </p>
            <p className={styles.item__info}>
              {data?.tests ? data?.tests : '00'} <span>{t('tests')}</span>
            </p>
            <p className={styles.item__info}>
              {data?.expert ? data?.expert : '00'}{' '}
              <span>{t('lessonsWithExpert')}</span>
            </p>
            {isSuccess && (
              <AlertComponent message={`${t('successAdd')}`} type='success' />
            )}
            {isBindError && (
              <AlertComponent
                message={`${t('courseAlreadyExist')}`}
                type='error'
              />
            )}
          </div>
          {isBindLoading && <Loader />}

          <TypeButton
            type={'submit'}
            handleClick={handleAddedCourse}
            modificator={'course__item'}
          >
            {user ? `${t('addCourse')}` : `${t('signUpForACourse')}`}
          </TypeButton>
        </div>
      </div>
      <WhyFast />
      <MainTitle modificator='contacts__title'>{t('similarCourses')}</MainTitle>
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
