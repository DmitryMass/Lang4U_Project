import React, { FC } from 'react';
import teacher from '../../../Assets/Images/teacher.png';
import MainTitle from '../../../Components/Text/Titles/MainTitle';
import { useTranslation } from 'react-i18next';

import styles from './teachers.module.scss';

interface ITeacherBox {
  teacher: string;
  img: string | object;
  lang: string;
}

const Teachers: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={styles.teacher__titleBox}>
        <MainTitle modificator='contacts__title'>{t('teacherTitle')}</MainTitle>
        <p className={styles.teachers__subtitle}>{t('teacherSubtitle')}</p>
      </div>
      <div className={styles.teacher__box}>
        {teachersBox.map((item) => (
          <div key={item.teacher} className={styles.teacher__about}>
            <div className={styles.teacher__img}>
              <img src={item.img as string} alt='teacher' />
            </div>
            <h3 className={styles.item__teacher__name}>{item.teacher}</h3>
            <p className={styles.item__teacher__lang}>{t(item.lang)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const teachersBox: ITeacherBox[] = [
  {
    teacher: 'James Mc.Gill',
    img: `${teacher}`,
    lang: 'engTeacher',
  },
  {
    teacher: 'Jone Mc.Gonacal',
    img: `${teacher}`,
    lang: 'germanTeacher',
  },
  {
    teacher: 'Iren Recolday',
    img: `${teacher}`,
    lang: 'spainTeacher',
  },
  {
    teacher: 'Mindjou Chunshen',
    img: `${teacher}`,
    lang: 'chinaTeacher',
  },
];

export default Teachers;
