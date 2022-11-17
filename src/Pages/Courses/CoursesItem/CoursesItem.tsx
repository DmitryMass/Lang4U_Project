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
import styles from './courses-item.module.scss';

type TCoursesItemParams = {
  id?: any;
};

const CoursesItem: FC = () => {
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
          <AlertComponent type='error' message='Вибачте сервер збожеволів.' />
        )}
        <div className={styles.about__container}>
          <AboutCourse isLoading={isLoading} title={data?.title} />
        </div>
        <div className={`${styles.item__course} ${boxColor}`}>
          <div className={styles.item__priceWrapper}>
            <div>
              <p className={styles.item__priceTitle}>Вартість</p>
              <p className={styles.item__price}>
                {data?.price ? data?.price : 'Від 0000 грн'}
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
              {data?.lessons ? data?.lessons : '00'} <span>Уроків</span>
            </p>
            <p className={styles.item__info}>
              {data?.task ? data?.task : '00'} <span>Завдань</span>
            </p>
            <p className={styles.item__info}>
              {data?.tests ? data?.tests : '00'} <span>Тестів</span>
            </p>
            <p className={styles.item__info}>
              {data?.expert ? data?.expert : '00'}{' '}
              <span>Занять із експертом</span>
            </p>
            {isSuccess && (
              <AlertComponent
                message='Успіх. Курс додано в особистий кабінет.'
                type='success'
              />
            )}
            {isBindError && (
              <AlertComponent message='Ви вже маєте такий курс' type='error' />
            )}
          </div>
          {isBindLoading && <Loader />}

          <TypeButton
            type={'submit'}
            handleClick={handleAddedCourse}
            modificator={'course__item'}
          >
            {user ? 'Додати курс в ОК' : 'Записатися на курс'}
          </TypeButton>
        </div>
      </div>
      <WhyFast />
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
