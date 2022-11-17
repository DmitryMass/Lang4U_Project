import React, { FC, memo } from 'react';
import TypeButton from '../../../../Components/Button/TypeButton/TypeButton';
import AlertComponent from '../../../../Components/Error/ErrorComponent';
import Messengers from '../../../../Components/Messengers/Messengers';
import MainTitle from '../../../../Components/Text/Titles/MainTitle';

import styles from './about-course.module.scss';

interface IAboutCourse {
  title: string | undefined;
  isLoading?: boolean | null;
}
interface IAbout {
  text: string;
}

const AboutCourse: FC<IAboutCourse> = ({ title, isLoading }) => {
  const buttonTitle: any = title?.split(' ').slice(1).join(' ');
  const capitalize = (s: string) => s?.charAt(0).toUpperCase() + s?.slice(1);
  return (
    <section className={styles.about__section}>
      <div>
        <div className={styles.about__titleWrapper}>
          {isLoading ? (
            <AlertComponent
              type='warning'
              message='Завантажую дані очікуйте...'
            />
          ) : (
            <MainTitle modificator='main__title'>{title}</MainTitle>
          )}
        </div>
        <MainTitle modificator='contacts__title'>Про курс</MainTitle>
        <p className={styles.about__subtitle}>Після проходження курсу:</p>
        <ul>
          {about.map(({ text }) => (
            <li key={text} className={styles.about__text}>
              {text}
            </li>
          ))}
        </ul>
        <div className={styles.about__bottom}>
          <TypeButton modificator='about__course'>
            {capitalize(buttonTitle)}
          </TypeButton>
          <div className={styles.about__messengers}>
            <p>Поділитися:</p>
            <Messengers modificator='course' />
          </div>
        </div>
      </div>
    </section>
  );
};

const about: IAbout[] = [
  {
    text: 'легко розповісте про себе, уявіть свою компанію',
  },
  {
    text: 'зможете підтримати розмову і легко орієнтуватися в побутових ситуаціях',
  },
  {
    text: 'легко знайомитися та спілкуватися з оточуючими',
  },
  {
    text: 'Ви ніколи не загубитеся в мовному середовищі!',
  },
];

//  Пока о курсе Общая инфа, нужно продумать для каждого отдельно

export default memo(AboutCourse);
