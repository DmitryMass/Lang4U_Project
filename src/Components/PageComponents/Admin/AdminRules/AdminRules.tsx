import React, { FC } from 'react';

import styles from './admin-rules.module.scss';

const AdminRules: FC = () => {
  return (
    <div className={styles.admin__rules}>
      <ul className={styles.rules__list}>
        <li>
          Логотип приклад:
          <br />
          https://.../svg.flag-ua{' '}
        </li>
        <li>
          Назва курсу починається з мови:
          <br /> Англійська, Німецька, Турецька і тд.
        </li>
        <li>Від 2000 грн. Від 5000 грн і тд.</li>
        <li>
          Кольори боксу курсу в доступі:{' '}
          <ul className={styles.rules__list}>
            <li>course__red</li>
            <li>course__blue</li>
            <li>course__green</li>
            <li>course__orange</li>
            <li>course__yellow</li>
          </ul>
        </li>
        <li>
          Силка на курс повинна закінчуватись на мову:
          <br />
          elementary English / advanced China
        </li>
        <li>Все інше, тільки цифри. В назві, ціні та силці можливі пробіли.</li>
        <li>
          Якщо раптом вписали щось не те, знизу є активний список курсів, його
          можна змінити та видалити, якщо не відображається новий курс, обновіть
          сторінку. Усю картину доданого курсу можна побачити по кліку на
          "Курси".
        </li>
      </ul>
    </div>
  );
};

export default AdminRules;
