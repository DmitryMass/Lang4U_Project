import React, { FC } from 'react';
import MainTitle from '../../../../Components/Text/Titles/MainTitle';

import studyOne from '../../../../Assets/Images/study_one.png';
import studyTwo from '../../../../Assets/Images/stydy_second.png';
import { useTranslation } from 'react-i18next';

import styles from './why-fast.module.scss';

interface IFastList {
  id: number | string;
  title: string;
  desc: string;
  img: string;
}

const WhyFast: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.fast}>
      <MainTitle modificator='how__title'>{t('whyFastTitle')}</MainTitle>
      <div className={styles.fast__container}>
        {fastList.map(({ desc, id, img, title }) => (
          <div key={id} className={styles.fast__box}>
            <div className={styles.fast__info}>
              <p className={styles.fast__id}>{id}</p>
              <h3 className={styles.fast__title}>{t(title)}</h3>
              <p className={styles.fast__desc}>{t(desc)}</p>
            </div>
            <div className={styles.fast__img}>
              <img src={img} alt='studyimg' />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const fastList: IFastList[] = [
  {
    id: 1,
    title: 'interestingLesson',
    desc: 'interestingLessonDesc',
    img: `${studyOne}`,
  },
  {
    id: 2,
    title: 'goodFormat',
    desc: 'goodFormatDesc',
    img: `${studyTwo}`,
  },
];

export default WhyFast;
