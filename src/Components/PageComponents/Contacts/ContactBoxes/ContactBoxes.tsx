import React, { FC } from 'react';

import Messengers from '../../../Messengers/Messengers';

import socnetwork from '../../../../Assets/Icons/socnetwork-contacts.svg';
import email from '../../../../Assets/Icons/email-contacts.svg';
import phone from '../../../../Assets/Icons/phone-contacts.svg';
import { useTranslation } from 'react-i18next';

import styles from './contact-boxes.module.scss';

const ContactBoxes: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.boxes__container}>
      <div className={styles.box}>
        <object
          className={styles.box__object}
          data={phone}
          type=''
          aria-label='svg'
        />
        <div>
          <h4 className={styles.box__title}>{t('onThePhone')}</h4>
          <p className={styles.box__number}>+380 73 555 24 12</p>
        </div>
      </div>
      <div className={styles.box}>
        <object
          className={styles.box__object}
          data={email}
          type=''
          aria-label='svg'
        />
        <div>
          <h4 className={styles.box__title}>{t('onEmail')}</h4>
          <a className={styles.box__link} href='some'>
            someAdress1@work.com
          </a>
          <a className={styles.box__link} href='some'>
            someAdress2@work.com
          </a>
        </div>
      </div>
      <div className={styles.box}>
        <object
          className={styles.box__object}
          data={socnetwork}
          type=''
          aria-label='svg'
        />
        <div>
          <h4 className={styles.box__title}>{t('onMessengers')}</h4>
          <div className={styles.box__messengers}>
            <Messengers modificator='contacts' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBoxes;
