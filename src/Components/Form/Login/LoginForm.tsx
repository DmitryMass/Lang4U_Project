import React, { FC } from 'react';
import { Field, Formik } from 'formik';
import TypeButton from '../../Button/TypeButton/TypeButton';

import { loginValidation } from '../ValidationScheme/ValidationAuth';
import { ROUTES } from '../../Constants/Routes/routes';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../auth-forms.module.scss';
import { useLoginMutation } from '../../../Store/Api-Query/Auth/auth';
import { useDispatch } from 'react-redux';
import useActions from '../../../Store/hooks-store/actions';

interface IInitalState {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const { loginSuccess } = useActions();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const formikHandleSubmit = async (
    values: IInitalState,
    { resetForm }: any
  ) => {
    const body = new FormData();
    Object.entries(values).forEach((item) => {
      body.append(item[0], item[1]);
    });
    try {
      const data: any = await login(body);
      if (data?.data?.message === 'Ok') {
        if (data?.data?.role === 'Admin') {
          localStorage.setItem('admin', 'true');
          dispatch(loginSuccess());
          navigate('/admin');
          return;
        }
        localStorage.setItem('user', 'true');
        dispatch(loginSuccess());
        navigate('/');
        return;
      }
      alert(data?.error?.data?.message);
    } catch (e) {
      console.log(e);
    }
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={formikHandleSubmit}
        validationSchema={loginValidation}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.form__inputWrapper}>
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
            </div>
            <TypeButton modificator={'auth__btn'} type='submit'>
              {isLoading ? 'Loading...' : 'Увійти'}
            </TypeButton>
          </form>
        )}
      </Formik>
      <div className={styles.auth__account}>
        <p className={styles.auth__text}>Немає аккаунту ?</p>
        <Link to={ROUTES.REGISTRATION}>Зареєструватися</Link>
      </div>
    </>
  );
};

export default LoginForm;
