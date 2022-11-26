import React, { FC, memo } from 'react';

import support from '../../Assets/Images/support.png';
import SupportForm from '../../Components/Form/Support/SupportForm';
import MainTitle from '../../Components/Text/Titles/MainTitle';
import { useTranslation } from 'react-i18next';

import styles from './support.module.scss';

const Support: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.support}>
      <div className={styles.support__container}>
        <div>
          <div className={styles.support__titleContainer}>
            <MainTitle modificator='support__title'>{t('support')}</MainTitle>
            <p className={styles.support__subtitle}>Lang4U</p>
            <p className={styles.support__subtitleInfo}>
              {t('supportSubtitle')}
            </p>
          </div>
          <div className={styles.support__infoWrapper}>
            <h2 className={styles.support__infoTitle}>{t('supportInfo')}</h2>
            <p className={styles.support__infoSubtitle}>{t('supportText')}</p>
          </div>
          <div>
            <div>
              <h2 className={styles.support__infoTitle}>{t('supportWrite')}</h2>
              <p className={styles.support__infoSubtitle}>
                {t('supportRequest')}
              </p>
            </div>
            <SupportForm />
          </div>
        </div>
        <div className={styles.support__objectWrapper}>
          <object data={support} type='' aria-label='support' />
        </div>
      </div>
    </section>
  );
};

export default memo(Support);
