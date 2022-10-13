import React, { FC } from 'react';
import { IForWhom } from '../../../../Types/for-whom-types';
import { forWhom } from '../../../Constants/ForWhom/forWhom';
import { ROUTES } from '../../../Constants/Routes/routes';
import Button from '../../../Button/Button';
import Nav from '../../../Navigation/Nav';
import ForWhomItem from './ForWhomItem/ForWhomItem';

import question from '../../../../Assets/Icons/question.svg';
import styles from './for-whom.module.scss';

const ForWhom: FC = () => {
  return (
    <section className={styles.forWhom}>
      <div className={styles.forWhom__question}>
        <object data={question} type='' aria-label='question' />
      </div>
      <div className={styles.forWhom__info}>
        <h3 className={styles.forWhom__title}>Кому підійде</h3>
        <p className={styles.forWhom__subtitle}>Lang4U</p>
        <p className={styles.forWhom__text}>
          <span className={styles.text__span}>Lang4U</span> підійде всім, хто
          хоче за короткий термін якісно змінити своє життя, освоївши іноземну
          мову.{' '}
        </p>
        <Button
          children='Спробувати безкоштовно'
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
