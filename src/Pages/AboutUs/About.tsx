import React, { FC } from 'react';

import aboutFirst from '../../Assets/Images/about-first.png';
import aboutSecond from '../../Assets/Images/about-second.png';
import aboutThird from '../../Assets/Images/about-third.png';
import MainTitle from '../../Components/Text/Titles/MainTitle';

import AboutUsItem from './AboutUsItem/AboutUsItem';
import FirstLesson from '../../Components/FirstLesson/FirstLesson';
import Teachers from './Teachers/Teachers';
import { useTranslation } from 'react-i18next';

import styles from './about.module.scss';

export interface IAbout {
  title: string;
  description: string;
  img?: string | HTMLImageElement | object;
  span?: string;
}

const About: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <MainTitle modificator='contacts__title'>{t('aboutUs')}</MainTitle>
        <p className={styles.about__subtitle}>{t('aboutSubtitle')}</p>
        <div className={styles.about__info}>
          {about.map((item) => {
            return <AboutUsItem key={item.title} item={item} />;
          })}
        </div>
        <Teachers />
        <FirstLesson />
      </div>
    </section>
  );
};

const about: IAbout[] = [
  {
    title: 'aboutFirstTitle',
    description: `aboutFirstDesc`,
    img: `${aboutFirst}`,
    span: 'Lang4U',
  },
  {
    title: 'aboutSecondTitle',
    description: `aboutSecondDesc`,
    img: `${aboutSecond}`,
  },
  {
    title: 'aboutThirdTitle',
    description: `aboutThirdDesc`,
    img: `${aboutThird}`,
    span: 'Lang4U',
  },
];

export default About;
