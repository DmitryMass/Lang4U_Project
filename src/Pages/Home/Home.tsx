import React, { FC } from 'react';
import CourseSwiper from '../../Components/Swiper/CourseSwiper/CourseSwiper';

import styles from './home.module.scss';

const Home: FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <div>Online Img other section</div>
        <CourseSwiper />
      </div>
    </div>
  );
};

export default Home;
