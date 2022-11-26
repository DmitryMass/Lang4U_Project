import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import SupportForm from '../../../Form/Support/SupportForm';
import styles from './contacts-form.module.scss';

const ContactsForm: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.form}>
      <div>
        <h3 className={styles.form__title}>{t('help')}</h3>
        <p className={styles.form__subtitle}>{t('helpSubtitle')}</p>
      </div>
      <SupportForm />
    </section>
  );
};

export default memo(ContactsForm);
