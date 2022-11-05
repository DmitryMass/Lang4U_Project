import React, { FC } from 'react';
import { Field, Formik } from 'formik';
import TypeButton from '../../Button/TypeButton/TypeButton';
import { contactsValidation } from '../ValidationScheme/ValidationContactsSchema';

import styles from './support-form.module.scss';
import { useSupport } from '../../hooks/useSupport';

const SupportForm: FC = () => {
  const { formikHandleSubmit } = useSupport();

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
                <div className={styles.name__error}>{errors.name}</div>
              )}
              <label className={styles.name__label} htmlFor='name'>
                Ім'я
                <Field
                  className={styles.form__name}
                  id='name'
                  type='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name='name'
                  placeholder="Ваше ім'я"
                />
              </label>
            </div>
            <div className={styles.email__box}>
              {errors.email && (
                <div className={styles.email__error}>{errors.email}</div>
              )}
              <label className={styles.email__label} htmlFor='email'>
                Пошта
                <Field
                  className={styles.form__email}
                  id='email'
                  type='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  name='email'
                  placeholder='Ваша пошта'
                />
              </label>
            </div>
          </div>
          <label className={styles.message__label} htmlFor='message'>
            Повідомлення{' '}
            <span className={styles.message__span}>(не обов'язково)</span>
            <Field
              className={styles.form__message}
              id='message'
              component='textarea'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              name='message'
              placeholder='Ваше питання'
            />
          </label>
          <TypeButton modificator={'button__contacts'} type='submit'>
            Залишити заявку
          </TypeButton>
        </form>
      )}
    </Formik>
  );
};

export default SupportForm;
