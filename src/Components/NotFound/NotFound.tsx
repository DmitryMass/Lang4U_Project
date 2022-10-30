import React from 'react';

import notFound from '../../Assets/Images/notFound.jpg';

import styles from './not-found.module.scss';

const NotFound = () => {
  return (
    <section className={styles.notfound}>
      <div className={styles.notfound__img}>
        <img src={notFound} alt='notfound' />
      </div>
    </section>
  );
};

export default NotFound;
