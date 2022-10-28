import React, { FC } from 'react';
import useFilter from '../../Components/hooks/useFilter';
import Nav from '../../Components/Navigation/Nav';
import MainTitle from '../../Components/Text/Titles/MainTitle';
import ICoursesList from '../../Types/courses-list-types';

import FilterPanel from './FilterPanel/FilterPanel';
import styles from './courses.module.scss';
import CourseSwiperItem from '../../Components/Swiper/CourseSwiper/CourseSwiperItem/CourseSwiperItem';

const Courses: FC = () => {
  const { filteredCourses } = useFilter();

  return (
    <div className={styles.filter}>
      <div className={styles.filter__titleWrapper}>
        <MainTitle modificator='contacts__title'>Курси</MainTitle>
      </div>
      <div className={styles.filterPanel}>
        <FilterPanel />
      </div>
      <div>
        <Nav
          modificator='course__wrapper'
          items={filteredCourses}
          renderItems={(item: ICoursesList) => (
            <CourseSwiperItem key={item.title} item={item} />
          )}
        />
      </div>
    </div>
  );
};

export default Courses;
