import React, { FC } from 'react';
import { Field, Formik } from 'formik';
import TypeButton from '../../Button/TypeButton/TypeButton';
import Loader from '../../Loader/Loader';
import { contactsValidation } from '../ValidationScheme/ValidationContactsSchema';

import { useSupport } from '../../hooks/useSupport';
import { useTranslation } from 'react-i18next';

import styles from './support-form.module.scss';
const SupportForm: FC = () => {
  const { t } = useTranslation();

  const { formikHandleSubmit, isLoading } = useSupport();

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      onSubmit={formikHandleSubmit}
      validationSchema={contactsValidation}
    >
      {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
        <form onSubmit={handleSubmit}>
          <div className={styles.form__inputWrapper}>
            <div className={styles.name__box}>
              {errors.name && (
                <div className={styles.name__error}>{t(errors.name)}</div>
              )}
              <label className={styles.name__label} htmlFor='name'>
                {t('supportName')}
                <Field
                  className={styles.form__name}
                  id='name'
                  type='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name='name'
                  placeholder={`${t('supportNamePlaceholder')}`}
                />
              </label>
            </div>
            <div className={styles.email__box}>
              {errors.email && (
                <div className={styles.email__error}>{t(errors.email)}</div>
              )}
              <label className={styles.email__label} htmlFor='email'>
                {t('email')}
                <Field
                  className={styles.form__email}
                  id='email'
                  type='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  name='email'
                  placeholder={`${t('supportEmailPlaceholder')}`}
                />
              </label>
            </div>
          </div>
          <label className={styles.message__label} htmlFor='message'>
            {t('supportMessage')}{' '}
            <span className={styles.message__span}>
              {t('supportMessageDesc')}
            </span>
            <Field
              className={styles.form__message}
              id='message'
              component='textarea'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              name='message'
              placeholder={`${t('supportMessagePlaceholder')}`}
            />
          </label>
          <TypeButton modificator={'button__contacts'} type='submit'>
            {isLoading ? <Loader /> : `${t('leaveRequest')}`}
          </TypeButton>
        </form>
      )}
    </Formik>
  );
};

export default SupportForm;
