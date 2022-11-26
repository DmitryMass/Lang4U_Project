import React, { FC, memo } from 'react';
import AlertComponent from '../../Components/Error/ErrorComponent';
import FaqSection from '../../Components/FAQSection/FaqSection';
import FirstLesson from '../../Components/FirstLesson/FirstLesson';
import Loader from '../../Components/Loader/Loader';
import ForWhom from '../../Components/PageComponents/Home/ForWhom/ForWhom';
import HowItWorks from '../../Components/PageComponents/Home/HowItWorks/HowItWorks';
import MainInfo from '../../Components/PageComponents/Home/MainInfo/MainInfo';
import Methodology from '../../Components/PageComponents/Home/Methodology/Methodology';
import CourseSwiper from '../../Components/Swiper/CourseSwiper/CourseSwiper';
import { useGetCourseQuery } from '../../Store/Api-Query/Courses/courses';
import { useTranslation } from 'react-i18next';

import styles from './home.module.scss';

const Home: FC = () => {
  const { isLoading } = useGetCourseQuery([]);
  const { t } = useTranslation();

  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        {isLoading && (
          <div className={styles.app__modal}>
            <AlertComponent type='warning' message={`${t('warning')}`} />
            <Loader />
          </div>
        )}
        <MainInfo />
        <CourseSwiper />
        <ForWhom />
        <Methodology />
        <HowItWorks />
        <FirstLesson />
        <FaqSection />
      </div>
    </div>
  );
};

export default memo(Home);
