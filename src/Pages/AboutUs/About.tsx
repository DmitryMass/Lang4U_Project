import React, { FC } from 'react';

import aboutFirst from '../../Assets/Images/about-first.png';
import aboutSecond from '../../Assets/Images/about-second.png';
import aboutThird from '../../Assets/Images/about-third.png';
import MainTitle from '../../Components/Text/Titles/MainTitle';

import AboutUsItem from './AboutUsItem/AboutUsItem';
import FirstLesson from '../../Components/FirstLesson/FirstLesson';
import Teachers from './Teachers/Teachers';
import styles from './about.module.scss';

export interface IAbout {
  title: string;
  description: string;
  img?: string | HTMLImageElement | object;
  span?: string;
}

const About: FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <MainTitle modificator='contacts__title'>Про нас</MainTitle>
        <p className={styles.about__subtitle}>Говори легко – живи вільно!</p>
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
    title: 'інтерактивна онлайн-школа іноземних мов',
    description: `Це нова повністю автоматизована платформа, яка допоможе вам прокачати мову для роботи, навчання або спілкування.
        Наша система дозволить вам у динамічній ігровій формі опанувати іноземну мову, вільно мислити та говорити, будувати пропозиції, підтримувати розмову в будь-якому суспільстві та у будь-якій життєвій ситуації.`,
    img: `${aboutFirst}`,
    span: 'Lang4U',
  },
  {
    title: 'Для тих, хто сам хоче будувати своє життя і прагне мрії!',
    description: `Наша школа підійде для школярів та студентів, бізнесменів та мандрівників, амбітних підприємців та винахідливих емігрантів. Ми дамо вам основи та міцні знання іноземних мов за короткий час та у зручному місці.`,
    img: `${aboutSecond}`,
  },
  {
    title: 'відрізняється від класичних курсів вивчення мови',
    description: `Це зрозуміла, нудна та повністю інтерактивна система! Ви самі вибираєте де, як і скільки займатись. Вона підійде всім, хто хоче за короткий термін якісно змінити своє життя, всім, хто готовий шукати нові можливості з новою мовою!`,
    img: `${aboutThird}`,
    span: 'Lang4U',
  },
];

export default About;
