import React, { FC } from 'react';
import { Field, Formik } from 'formik';
import TypeButton from '../../Button/TypeButton/TypeButton';
import { registrationValidation } from '../ValidationScheme/ValidationAuth';
import { ROUTES } from '../../Constants/Routes/routes';
import { Link } from 'react-router-dom';
import { useRegistrationMutation } from '../../../Store/Api-Query/Auth/auth';
import Loader from '../../Loader/Loader';
import { useSubmit } from '../useSubmit';
import AlertComponent from '../../Error/ErrorComponent';

import { useTranslation } from 'react-i18next';

import styles from '../auth-forms.module.scss';

const RegistrationForm: FC = () => {
  const { t } = useTranslation();
  const [registration, { isLoading, isError }] = useRegistrationMutation();
  const { formikHandleSubmit } = useSubmit(registration);
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '', confirm: '' }}
        onSubmit={formikHandleSubmit}
        validationSchema={registrationValidation}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.form__inputWrapper}>
              {isError && (
                <AlertComponent type='error' message={`${t('authError')}`} />
              )}
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
                    placeholder={`${t('emailPlaceholder')}`}
                  />
                </label>
              </div>
              <div className={styles.password__box}>
                {errors.password && (
                  <div className={styles.password__error}>
                    {t(errors.password)}
                  </div>
                )}
                <label className={styles.password__label} htmlFor='password'>
                  {t('password')}
                  <Field
                    className={styles.form__password}
                    id='password'
                    type='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    name='password'
                    placeholder={`${t('password')}`}
                  />
                </label>
              </div>
              <div className={styles.confirm__box}>
                {errors.confirm && (
                  <div className={styles.confirm__error}>
                    {t(errors.confirm)}
                  </div>
                )}
                <label className={styles.confirm__label} htmlFor='confirm'>
                  {t('confirmPassword')}
                  <Field
                    className={styles.form__confirm}
                    id='confirm'
                    type='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirm}
                    name='confirm'
                    placeholder={`${t('confirmPassword')}`}
                  />
                </label>
              </div>
            </div>
            <TypeButton modificator={'auth__btn'} type='submit'>
              {isLoading ? <Loader /> : `${t('signUp')}`}
            </TypeButton>
          </form>
        )}
      </Formik>
      <div className={styles.auth__account}>
        <p className={styles.auth__text}>{t('accExist')}</p>
        <Link to={ROUTES.LOGIN}>{t('login')}</Link>
      </div>
    </>
  );
};

export default RegistrationForm;
