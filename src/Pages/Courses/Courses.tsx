import React, { FC, memo } from 'react';
import Nav from '../../Components/Navigation/Nav';
import MainTitle from '../../Components/Text/Titles/MainTitle';
import ICoursesList from '../../Types/courses-list-types';
import FilterPanel from './FilterPanel/FilterPanel';
import CourseSwiperItem from '../../Components/Swiper/CourseSwiper/CourseSwiperItem/CourseSwiperItem';
import { useGetCourseQuery } from '../../Store/Api-Query/Courses/courses';
import AlertComponent from '../../Components/Error/ErrorComponent';
import useTypedSelector from '../../Store/hooks-store/useTypedSelector';

import styles from './courses.module.scss';

const Courses: FC = () => {
  const { courses, filteredCourses } = useTypedSelector(
    (state) => state.filterSlice
  );
  const { isError } = useGetCourseQuery([]);

  return (
    <div className={styles.filter}>
      <div className={styles.filter__titleWrapper}>
        <MainTitle modificator='contacts__title'>Курси</MainTitle>
      </div>
      <div className={styles.filterPanel}>
        <FilterPanel />
      </div>
      <div>
        {isError && (
          <AlertComponent type='error' message='Вибачте сервер збожеволів.' />
        )}
        {courses.length <= 0 ? (
          <AlertComponent type='warning' message='Очікуйте будь-ласка.' />
        ) : (
          <Nav
            modificator='course__wrapper'
            items={filteredCourses.length ? filteredCourses : courses}
            renderItems={(item: ICoursesList) => (
              <CourseSwiperItem key={item.title} item={item} />
            )}
          />
        )}
      </div>
    </div>
  );
};

export default memo(Courses);
