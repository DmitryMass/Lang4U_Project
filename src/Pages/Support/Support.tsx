import React, { FC, memo } from 'react';

import support from '../../Assets/Images/support.png';
import SupportForm from '../../Components/Form/Support/SupportForm';
import MainTitle from '../../Components/Text/Titles/MainTitle';
import styles from './support.module.scss';

const Support: FC = () => {
  return (
    <section className={styles.support}>
      <div className={styles.support__container}>
        <div>
          <div className={styles.support__titleContainer}>
            <MainTitle modificator='support__title'>Служба підтримки</MainTitle>
            <p className={styles.support__subtitle}>Lang4U</p>
            <p className={styles.support__subtitleInfo}>
              Якщо у вас виникли труднощі по роботі сайту, складності в оплаті
              або є питання, ви можете звернутися в службу підтримки, ми
              обов'язково вам допоможемо.
            </p>
          </div>
          <div className={styles.support__infoWrapper}>
            <h2 className={styles.support__infoTitle}>Загальна інформація</h2>
            <p className={styles.support__infoSubtitle}>
              Ясність нашої позиції очевидна: консультація з широким активом
              однозначно визначає кожного учасника як здатного приймати власні
              рішення щодо прогресу професійної спільноти. Як уже неодноразово
              згадано, зроблені на базі інтернет-аналітики висновки закликають
              нас до нових звершень, які, у свою чергу, мають бути об'єднані у
              цілі кластери собі подібних. Будучи лише частиною загальної
              картини, явні ознаки перемоги інституціоналізації піддані цілій
              серії незалежних досліджень.
            </p>
          </div>
          <div>
            <div>
              <h2 className={styles.support__infoTitle}>
                Написати до служби підтримки
              </h2>
              <p className={styles.support__infoSubtitle}>
                Залишіть заявку і ми постараємося вам допомогти
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
