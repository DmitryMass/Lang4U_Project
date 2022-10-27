import React, { FC, memo } from 'react';
import MainTitle from '../../Text/Titles/MainTitle';
import ContactBoxes from './ContactBoxes/ContactBoxes';
import ContactsForm from './ContactsForm/ContactsForm';

import styles from './contacts.module.scss';

const Contacts: FC = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.contacts__container}>
        <div className={styles.contacts__info}>
          <MainTitle modificator='contacts__title'>Контакти</MainTitle>
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

export default memo(Contacts);
