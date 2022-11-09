import React, { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import AlertComponent from '../../../Components/Error/ErrorComponent';
import FirstLesson from '../../../Components/FirstLesson/FirstLesson';
import CourseSwiperItem from '../../../Components/Swiper/CourseSwiper/CourseSwiperItem/CourseSwiperItem';
import MainTitle from '../../../Components/Text/Titles/MainTitle';
import {
  useBindCourseMutation,
  useGetOneCourseQuery,
} from '../../../Store/Api-Query/Courses/courses';
import useTypedSelector from '../../../Store/hooks-store/useTypedSelector';
import ICoursesList from '../../../Types/courses-list-types';
import AboutCourse from './AboutCourse/AboutCourse';
import WhyFast from './WhyFast/WhyFast';

import styles from './courses-item.module.scss';
import TypeButton from '../../../Components/Button/TypeButton/TypeButton';

type TCoursesItemParams = {
  id?: any;
};

const CoursesItem: FC = () => {
  const [bindCourse] = useBindCourseMutation();
  const { id } = useParams<TCoursesItemParams>();
  const { data, isLoading, isError } = useGetOneCourseQuery(id);
  const { courses } = useTypedSelector((state) => state.filterSlice);
  const { user } = useTypedSelector((state) => state.userToken);

  const filteredCourses = courses
    .filter(
      (item: ICoursesList) =>
        item.link.split(' ').pop() === id?.split(' ').pop()
    )
    .filter((item: ICoursesList) => item.link !== id);

  const handleAddedCourse = async () => {
    try {
      await bindCourse({ course: id });
    } catch (e) {
      console.log(e);
    }
  };

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
              <TypeButton
                type={'submit'}
                handleClick={user && handleAddedCourse}
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
