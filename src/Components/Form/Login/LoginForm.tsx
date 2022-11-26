import React, { FC } from 'react';
import { ROUTES } from '../../Constants/Routes/routes';
import { Link } from 'react-router-dom';
import { Field, Formik } from 'formik';
import { loginValidation } from '../ValidationScheme/ValidationAuth';
import { useLoginMutation } from '../../../Store/Api-Query/Auth/auth';
import { useSubmit } from '../useSubmit';
import TypeButton from '../../Button/TypeButton/TypeButton';
import Loader from '../../Loader/Loader';
import AlertComponent from '../../Error/ErrorComponent';
import { useTranslation } from 'react-i18next';

import styles from '../auth-forms.module.scss';

const LoginForm: FC = () => {
  const { t } = useTranslation();
  const [login, { isLoading, isError }] = useLoginMutation();
  const { formikHandleLoginSubmit } = useSubmit(login);

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={formikHandleLoginSubmit}
        validationSchema={loginValidation}
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
            </div>
            <TypeButton modificator={'auth__btn'} type='submit'>
              {isLoading ? <Loader /> : `${t('signIn')}`}
            </TypeButton>
          </form>
        )}
      </Formik>
      <div className={styles.auth__account}>
        <p className={styles.auth__text}>{t('noAcc')}</p>
        <Link to={ROUTES.REGISTRATION}>{t('signUp')}</Link>
      </div>
    </>
  );
};

export default LoginForm;
