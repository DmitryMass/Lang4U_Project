import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './footer-bottom.module.scss';

const FooterBottom: FC = () => {
  return (
    <section className={styles.footer__bottom}>
      <div className={`${styles.bottom__container} ${styles.bottom__flex}`}>
        <h5 className={styles.bottom__title}>© 2022 Language For You</h5>
        <div>
          <Link to={'/rights'} className={styles.bottom__rights}>
            Всі права захищені
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FooterBottom;
