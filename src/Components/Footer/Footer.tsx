import React, { FC } from 'react';
import FooterBottom from './Footer-Bottom/FooterBottom';
import FooterTop from './Footer-Top/FooterTop';

import styles from './footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
