import React, { FC, memo } from 'react';
import TypeButton from '../../../../Components/Button/TypeButton/TypeButton';
import AlertComponent from '../../../../Components/Error/ErrorComponent';
import Messengers from '../../../../Components/Messengers/Messengers';
import MainTitle from '../../../../Components/Text/Titles/MainTitle';
import { useTranslation } from 'react-i18next';

import styles from './about-course.module.scss';

interface IAboutCourse {
  title: string | undefined;
  isLoading?: boolean | null;
}
interface IAbout {
  text: string;
}

const AboutCourse: FC<IAboutCourse> = ({ title, isLoading }) => {
  const { t } = useTranslation();

  const buttonTitle: any = title?.split(' ').slice(1).join(' ');
  const capitalize = (s: string) => s?.charAt(0).toUpperCase() + s?.slice(1);
  const readyBtnTitle = capitalize(buttonTitle);
  return (
    <section className={styles.about__section}>
      <div>
        <div className={styles.about__titleWrapper}>
          {isLoading ? (
            <AlertComponent type='warning' message={`${t('warning')}`} />
          ) : (
            <MainTitle modificator='main__title'>{`${t(title!)}`}</MainTitle>
          )}
        </div>
        <MainTitle modificator='contacts__title'>{t('aboutCourse')}</MainTitle>
        <p className={styles.about__subtitle}>{t('afterCourse')}</p>
        <ul>
          {about.map(({ text }) => (
            <li key={text} className={styles.about__text}>
              {t(text)}
            </li>
          ))}
        </ul>
        <div className={styles.about__bottom}>
          <TypeButton modificator='about__course'>
            {t(readyBtnTitle)}
          </TypeButton>
          <div className={styles.about__messengers}>
            <p className={styles.about__share}>{t('share')}</p>
            <Messengers modificator='course' />
          </div>
        </div>
      </div>
    </section>
  );
};

const about: IAbout[] = [
  {
    text: 'afterCourseFirst',
  },
  {
    text: 'afterCourseSecond',
  },
  {
    text: 'afterCourseThird',
  },
  {
    text: 'afterCourseFour',
  },
];

//  Пока о курсе Общая инфа, нужно продумать для каждого отдельно

export default memo(AboutCourse);
