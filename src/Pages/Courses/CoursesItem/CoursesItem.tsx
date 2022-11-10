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

import styles from './courses-item.module.scss';
import TypeButton from '../../../Components/Button/TypeButton/TypeButton';
import Loader from '../../../Components/Loader/Loader';
import { useCourseItem } from '../../../Components/hooks/courseItemHook';

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
                {isSuccess && (
                  <AlertComponent
                    message='Успіх. Курс додано в особистий кабінет.'
                    type='success'
                  />
                )}
                {isBindError && (
                  <AlertComponent
                    message='Ви вже маєте такий курс'
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
                {user ? 'Додати курс в ОК' : 'Записатися на курс'}
              </TypeButton>
            </div>
          </>
        )}
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
