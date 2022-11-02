import React, { FC } from 'react';
import { Field, Formik } from 'formik';
import TypeButton from '../../Button/TypeButton/TypeButton';
import { registrationValidation } from '../ValidationScheme/ValidationAuth';
import { ROUTES } from '../../Constants/Routes/routes';
import { Link } from 'react-router-dom';
import styles from '../auth-forms.module.scss';
import { useRegistrationMutation } from '../../../Store/Api-Query/Auth/auth';
import Loader from '../../Loader/Loader';
import { useSubmit } from '../useSubmit';
import AlertComponent from '../../Error/ErrorComponent';

const RegistrationForm: FC = () => {
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
                <AlertComponent
                  type='error'
                  message='Помилка, спробуйте ще раз.'
                />
              )}
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
              <div className={styles.password__box}>
                {errors.password && (
                  <div className={styles.password__error}>
                    {errors.password}
                  </div>
                )}
                <label className={styles.password__label} htmlFor='password'>
                  Пароль
                  <Field
                    className={styles.form__password}
                    id='password'
                    type='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    name='password'
                    placeholder='Пароль'
                  />
                </label>
              </div>
              <div className={styles.confirm__box}>
                {errors.confirm && (
                  <div className={styles.confirm__error}>{errors.confirm}</div>
                )}
                <label className={styles.confirm__label} htmlFor='confirm'>
                  Підтвердити пароль
                  <Field
                    className={styles.form__confirm}
                    id='confirm'
                    type='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirm}
                    name='confirm'
                    placeholder='Підтвердити пароль'
                  />
                </label>
              </div>
            </div>
            <TypeButton modificator={'auth__btn'} type='submit'>
              {isLoading ? <Loader /> : 'Зареєструватись'}
            </TypeButton>
          </form>
        )}
      </Formik>
      <div className={styles.auth__account}>
        <p className={styles.auth__text}>Вже є аккаунт ?</p>
        <Link to={ROUTES.LOGIN}>Увійти</Link>
      </div>
    </>
  );
};

export default RegistrationForm;
