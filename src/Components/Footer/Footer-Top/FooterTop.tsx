import React, { FC } from 'react';
import Logo from '../../Logo/Logo';
import Nav from '../../Navigation/Nav';
import { IFooterEducation, IFooterInfo } from '../../../Types/footer-links';
import {
  footerEducation,
  footerInfo,
} from '../../Constants/Footer-Nav/footer-nav';
import FooterLinkItem from '../FooterLinkItem/FooterLinkItem';

import visa from '../../../Assets/Icons/visa.svg';
import mastercard from '../../../Assets/Icons/mastercard.svg';
import { useTranslation } from 'react-i18next';

import FooterContacts from '../Footer-Contacts/FooterContacts';

import styles from './footer-top.module.scss';

const FooterTop: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.footer__top}>
      <div className={`${styles.footer__container} ${styles.footer__grid}`}>
        <div className={styles.footer__about}>
          <Logo />
          <p className={styles.footer__text}>{t('footerTitle')}</p>
          <div className={styles.footer__payment}>
            <object data={visa} type='' aria-label='visa' />
            <object data={mastercard} type='' aria-label='master' />
          </div>
        </div>
        <div className={styles.footer__education}>
          <h3 className={styles.footer__title}>{t('study')}</h3>
          <Nav
            modificator={styles.footer__nav}
            items={footerEducation}
            renderItems={(item: IFooterEducation) => (
              <FooterLinkItem elem={item} key={item.link} />
            )}
          />
        </div>
        <div className={styles.footer__info}>
          <h3 className={styles.footer__title}>{t('info')}</h3>
          <Nav
            modificator={styles.footer__nav}
            items={footerInfo}
            renderItems={(item: IFooterInfo) => (
              <FooterLinkItem elem={item} key={item.link} />
            )}
          />
        </div>
        <FooterContacts />
      </div>
    </section>
  );
};

export default FooterTop;
