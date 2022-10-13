import React, { FC } from 'react';
import FirstLesson from '../../Components/FirstLesson/FirstLesson';
import ForWhom from '../../Components/PageComponents/Home/ForWhom/ForWhom';
import MainInfo from '../../Components/PageComponents/Home/MainInfo/MainInfo';
import Methodology from '../../Components/PageComponents/Home/Methodology/Methodology';
import CourseSwiper from '../../Components/Swiper/CourseSwiper/CourseSwiper';

import styles from './home.module.scss';

const Home: FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <MainInfo />
        <CourseSwiper />
        <ForWhom />
        <Methodology />
        <FirstLesson />
      </div>
    </div>
  );
};

export default Home;
