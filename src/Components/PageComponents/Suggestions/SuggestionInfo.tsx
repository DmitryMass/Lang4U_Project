import React, { FC } from 'react';
import MainTitle from '../../Text/Titles/MainTitle';
import { useTranslation } from 'react-i18next';

import suggObj from '../../../Assets/Icons/suggestions.svg';
import styles from './suggestion-info.module.scss';

const SuggestionInfo: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.suggestions__info}>
      <MainTitle
        span={<span className='suggestions__span'>Lang4U</span>}
        modificator='main__title'
      >
        {t('suggestionTitle')}
      </MainTitle>
      <p className={styles.suggestions__subtitle}>{t('suggestionSubtitle')}</p>
      <div className={styles.suggestions__box}>
        <div className={styles.suggestions__warning}>
          <object data={suggObj} type='' aria-label='sugg obj' />
          <h3>{t('supportInfo')}</h3>
        </div>
        <p className={styles.suggestions__txt}>
          {t('suggestionHere')}
          <br />
          {t('suggestionIfProblem')}
        </p>
        <br />
        <p className={styles.suggestions__txt}>
          {t('suggestionWishes')} <br />
          {t('suggestionWishesCourse')}
        </p>
      </div>
    </div>
  );
};

export default SuggestionInfo;
