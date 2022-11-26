import React, { FC } from 'react';
import { IForWhom } from '../../../../Types/for-whom-types';
import { forWhom } from '../../../Constants/ForWhom/forWhom';
import { ROUTES } from '../../../Constants/Routes/routes';
import Button from '../../../Button/Button';
import Nav from '../../../Navigation/Nav';
import ForWhomItem from './ForWhomItem/ForWhomItem';

import question from '../../../../Assets/Icons/question.svg';
import MainTitle from '../../../Text/Titles/MainTitle';
import { useTranslation } from 'react-i18next';

import styles from './for-whom.module.scss';

const ForWhom: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.forWhom}>
      <div className={styles.forWhom__question}>
        <object data={question} type='' aria-label='question' />
      </div>
      <div className={styles.forWhom__info}>
        <MainTitle modificator='forWhom__title'>{t('forWhom')}</MainTitle>
        <p className={styles.forWhom__subtitle}>Lang4U</p>
        <p className={styles.forWhom__text}>
          <span className={styles.text__span}>Lang4U</span>{' '}
          {t('forWhomSubtitle')}{' '}
        </p>
        <Button
          children={`${t('tryToFree')}`}
          route={ROUTES.REGISTRATION}
          modificator={'main__free'}
        />
      </div>
      <Nav
        modificator={styles.forWhom__nav}
        items={forWhom}
        renderItems={(item: IForWhom) => (
          <ForWhomItem item={item} key={item.human} />
        )}
      />
    </section>
  );
};

export default ForWhom;
