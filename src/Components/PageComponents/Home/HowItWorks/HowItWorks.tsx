import React, { FC } from 'react';

import freeCourse from '../../../../Assets/Images/freeCourse.png';
import MainTitle from '../../../Text/Titles/MainTitle';
import { useTranslation } from 'react-i18next';

import styles from './how-it-works.module.scss';

interface IHowItWorksList {
  id: string;
  title: string;
  desc: string;
  img: string;
}

const HowItWorks: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.how}>
      <div className={styles.how__name}>
        <MainTitle modificator='how__title'>{t('howItWorksTitle')}</MainTitle>
      </div>
      <div className={styles.how__wrapper}>
        {howItWorks.map(({ desc, id, img, title }: IHowItWorksList) => {
          return (
            <div key={id} className={styles.how__box}>
              <p className={styles.how__id}>{id}</p>
              <h3 className={styles.how__title}>{t(title)}</h3>
              <p className={styles.how__description}>{t(desc)}</p>
              <img src={img} alt='firstLesson' />
            </div>
          );
        })}
      </div>
    </section>
  );
};

const howItWorks: IHowItWorksList[] = [
  {
    id: '01',
    title: 'choice',
    desc: 'choiceDesc',
    img: `${freeCourse}`,
  },
  {
    id: '02',
    title: 'registration',
    desc: 'afterRegistration',
    img: `${freeCourse}`,
  },
  {
    id: '03',
    title: 'study',
    desc: 'studyDesc',
    img: `${freeCourse}`,
  },
];
export default HowItWorks;
