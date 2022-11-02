import React, { FC } from 'react';
import AdminForm from '../../Components/Form/AdminForm/AdminForm';
import ListOfCourses from '../../Components/PageComponents/Admin/ListOfCourses/ListOfCourses';

import styles from './admin.module.scss';
const Admin: FC = () => {
  return (
    <section className={styles.admin}>
      <div className={styles.admin__container}>
        <ListOfCourses />
        <AdminForm />
      </div>
    </section>
  );
};

export default Admin;
