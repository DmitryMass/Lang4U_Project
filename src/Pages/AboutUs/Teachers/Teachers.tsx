import React, { FC } from 'react';
import teacher from '../../../Assets/Images/teacher.png';
import MainTitle from '../../../Components/Text/Titles/MainTitle';

import styles from './teachers.module.scss';

interface ITeacherBox {
  teacher: string;
  img: string | object;
  lang: string;
}

const Teachers: FC = () => {
  return (
    <div>
      <div className={styles.teacher__titleBox}>
        <MainTitle modificator='contacts__title'>
          Курси створили професійні філологи та педагоги
        </MainTitle>
        <p className={styles.teachers__subtitle}>
          Носії мови, викладачі зарубіжних університетів, які багато років
          працюють у тому числі і в Україні, володіють методиками викладання
          своєї мови, як іноземної та чудово знають нюанси викладання саме в
          українському середовищі.
        </p>
      </div>
      <div className={styles.teacher__box}>
        {teachersBox.map((item) => (
          <div className={styles.teacher__about}>
            <div className={styles.teacher__img}>
              <img src={item.img as string} alt='teacher' />
            </div>
            <h3 className={styles.item__teacher__name}>{item.teacher}</h3>
            <p className={styles.item__teacher__lang}>{item.lang}</p>
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
    lang: 'Викладач Англійської',
  },
  {
    teacher: 'Jone Mc.Gonacal',
    img: `${teacher}`,
    lang: 'Викладач Німецької',
  },
  {
    teacher: 'Iren Recolday',
    img: `${teacher}`,
    lang: 'Викладач Іспанської',
  },
  {
    teacher: 'Mindjou Chunshen',
    img: `${teacher}`,
    lang: 'Викладач Китайської',
  },
];

export default Teachers;
