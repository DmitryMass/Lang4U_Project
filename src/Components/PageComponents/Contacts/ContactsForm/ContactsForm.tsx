import React, { FC, memo } from 'react';

import SupportForm from '../../../Form/Support/SupportForm';
import styles from './contacts-form.module.scss';

const ContactsForm: FC = () => {
  return (
    <section className={styles.form}>
      <div>
        <h3 className={styles.form__title}>
          Потрібна допомога із вибором курсу?
        </h3>
        <p className={styles.form__subtitle}>
          Залишіть заявку і ми підберемо індивідуальне рішення
        </p>
      </div>
      <SupportForm />
    </section>
  );
};

export default memo(ContactsForm);
