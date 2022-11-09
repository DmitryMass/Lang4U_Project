import React, { FC, useState } from 'react';
import Nav from '../../../Components/Navigation/Nav';
import MainTitle from '../../../Components/Text/Titles/MainTitle';
import EachCourse from './EachCourse';
import Button from '../../../Components/Button/Button';

import styles from './user-course.module.scss';

const UserCourse: FC = () => {
  const [cours, setCours] = useState(true);
  const courses = [
    {
      id: 1,
      course: '1',
    },
  ];

  return (
    <div className={styles.usercourse}>
      <MainTitle modificator='userpage__title'>Ваші курси</MainTitle>
      {cours ? (
        <Nav
          modificator=''
          items={courses}
          renderItems={(item) => <EachCourse key={item.id} item={item} />}
        />
      ) : (
        <div>
          <p className={styles.non__course}>У вас поки що немає курсів</p>
          <Button modificator='main__free' route='/courses'>
            До курсів
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserCourse;
