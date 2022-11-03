import React, { FC, memo } from 'react';
// import useFilter from '../../Components/hooks/useFilter';
import Nav from '../../Components/Navigation/Nav';
import MainTitle from '../../Components/Text/Titles/MainTitle';
import ICoursesList from '../../Types/courses-list-types';

import FilterPanel from './FilterPanel/FilterPanel';
import styles from './courses.module.scss';
import CourseSwiperItem from '../../Components/Swiper/CourseSwiper/CourseSwiperItem/CourseSwiperItem';
import { useGetCourseQuery } from '../../Store/Api-Query/Courses/courses';
import AlertComponent from '../../Components/Error/ErrorComponent';
import Loader from '../../Components/Loader/Loader';

const Courses: FC = () => {
  // const { filteredCourses } = useFilter();
  const { data = [], isError } = useGetCourseQuery([]);
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
        {data.length < 1 ? (
          <AlertComponent type='warning' message='Очікуйте будь-ласка.' />
        ) : (
          <Nav
            modificator='course__wrapper'
            items={data}
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
