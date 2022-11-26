import React, { FC } from 'react';
import { IAbout } from '../About';
import { useTranslation } from 'react-i18next';

import styles from './about-item.module.scss';

interface IAboutItem {
  item: IAbout;
}

const AboutUsItem: FC<IAboutItem> = ({
  item: { description, img, title, span },
}) => {
  const { t } = useTranslation();

  return (
    <>
      {span ? (
        <div className={styles.item}>
          <div className={styles.item__info}>
            <h2 className={styles.item__title}>
              <span className={styles.item__span}>{span}</span> - {t(title)}
            </h2>
            <p className={styles.item__description}>{t(description)}</p>
          </div>
          <div className={styles.item__img}>
            <img src={img as string} alt='about' />
          </div>
        </div>
      ) : (
        <div className={styles.item}>
          <div className={styles.item__img}>
            <img src={img as string} alt='about' />
          </div>
          <div className={styles.item__info}>
            <h2 className={styles.item__title}>{t(title)}</h2>
            <p className={styles.item__description}>{t(description)}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutUsItem;
