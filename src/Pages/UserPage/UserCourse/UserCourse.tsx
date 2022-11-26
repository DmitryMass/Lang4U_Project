import React, { FC } from 'react';
import Nav from '../../../Components/Navigation/Nav';
import MainTitle from '../../../Components/Text/Titles/MainTitle';
import EachCourse from './EachCourse';
import Button from '../../../Components/Button/Button';
import { useTranslation } from 'react-i18next';

import useTypedSelector from '../../../Store/hooks-store/useTypedSelector';
import styles from './user-course.module.scss';

const UserCourse: FC = () => {
  const { t } = useTranslation();

  const { userCourse } = useTypedSelector((state) => state.userCourse);

  return (
    <div className={styles.usercourse}>
      <MainTitle modificator='userpage__title'>{t('yoursCourse')}</MainTitle>
      {userCourse.length > 0 ? (
        <Nav
          modificator=''
          items={userCourse}
          renderItems={(item) => <EachCourse key={item.title} elem={item} />}
        />
      ) : (
        <div>
          <p className={styles.non__course}>{t('noOneCourse')}</p>
          <Button modificator='main__free' route='/courses'>
            {t('toTheCourses')}
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserCourse;
