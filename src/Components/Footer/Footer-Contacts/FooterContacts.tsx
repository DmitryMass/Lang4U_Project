import React from 'react';
import Messengers from '../../Messengers/Messengers';

import styles from './footer-contacts.module.scss';

const FooterContacts = () => {
  return (
    <div className={styles.footer__contacts}>
      <h3 className={styles.contacts__title}>Контакти</h3>
      <p className={styles.contacts__number}>+380 73 555 24 12</p>
      <p className={styles.contacts__email}>Mail@mail.com</p>
      <p className={styles.contacts__address}>49000, Dnipro, Ukraine</p>
      <Messengers modificator='messengers__white' />
    </div>
  );
};

export default FooterContacts;
