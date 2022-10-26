import React, { FC } from 'react';
import ContactBoxes from './ContactBoxes/ContactBoxes';

import styles from './contacts.module.scss';
import ContactsForm from './ContactsForm/ContactsForm';

const Contacs: FC = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.contacts__container}>
        <div className={styles.contacts__info}>
          <h1 className={styles.contacts__title}>Контакти</h1>
          <p className={styles.contacts__subtitle}>
            Ми на зв'язку у будь-який зручний час
          </p>
        </div>
        <div className={styles.contacts__wrapper}>
          <ContactBoxes />
          <ContactsForm />
        </div>
      </div>
    </section>
  );
};

export default Contacs;
