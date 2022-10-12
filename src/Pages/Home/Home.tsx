import React, { FC } from 'react';

import styles from './home.module.scss';

const Home: FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>hello</div>
    </div>
  );
};

export default Home;
