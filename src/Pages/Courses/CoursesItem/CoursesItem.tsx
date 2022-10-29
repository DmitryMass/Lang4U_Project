import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../../Components/Button/Button';
import { coursesList } from '../../../Components/Constants/Courses/courses';
import CourseSwiperItem from '../../../Components/Swiper/CourseSwiper/CourseSwiperItem/CourseSwiperItem';

import styles from './courses-item.module.scss';

type TCoursesItemParams = {
  id?: string;
};

const CoursesItem = () => {
  const { id } = useParams<TCoursesItemParams>();
  const lang = id?.split(' ').pop();

  const filteredCourses = coursesList
    .filter((item) => item.link.split(' ').pop() === lang)
    .filter((item) => item.link !== id);
  const { color, details, tests, task, lessons, expert, price, logo, link } =
    coursesList.filter((item) => item.link === id)[0];

  return (
    <div className={styles.item__container}>
      <div>
        <div></div>

        <div className={`${styles.item__course} ${color}`}>
          <div>
            <div>
              <p>Вартість</p>
              <p>{price}</p>
            </div>
            <div>
              <object
                className={styles.item__logo}
                data={logo}
                type=''
                aria-label='obj'
              />
            </div>
          </div>
          <div>
            <p>{lessons}</p>
            <p>{task}</p>
            <p>{tests}</p>
            <p>{expert}</p>
          </div>
          <Button modificator='main__free' route={'/'}>
            Записатися на курс
          </Button>
        </div>
      </div>
      <div>
        {filteredCourses.map((item) => (
          <CourseSwiperItem key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CoursesItem;
