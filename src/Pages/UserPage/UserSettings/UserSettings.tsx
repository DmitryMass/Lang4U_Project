import React, { FC, memo } from 'react';
import { Field, Formik } from 'formik';
import TypeButton from '../../../Components/Button/TypeButton/TypeButton';
import Loader from '../../../Components/Loader/Loader';

import styles from './user-settings.module.scss';
import { useSettings } from '../../../Components/hooks/useSettings';

interface IUserSettingsProps {
  data: any;
}

const UserSettings: FC<IUserSettingsProps> = ({ data }) => {
  const { handleUpdateUserInfo, isLoading } = useSettings();
  return (
    <div className={styles.settings}>
      <h3 className={styles.settings__title}>Особисті дані</h3>
      <Formik
        initialValues={{
          email: `${data?.email ? data?.email : ''}`,
          name: `${data?.name ? data?.name : ''}`,
          surname: `${data?.surname ? data?.surname : ''}`,
          city: `${data?.city ? data?.city : ''}`,
          age: `${data?.age ? data?.age : ''}`,
        }}
        onSubmit={handleUpdateUserInfo}
        validationSchema={''}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.form__inputWrapper}>
              <div className={styles.box__email}>
                {errors.email && (
                  <div className={styles.error__email}>{errors.email}</div>
                )}
                <label className={styles.label__email} htmlFor='email'>
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
              <div className={styles.inputs__wrapper}>
                <div className={styles.box__name}>
                  {errors.name && (
                    <div className={styles.error__name}>{errors.name}</div>
                  )}
                  <label className={styles.label__name} htmlFor='name'>
                    Ім'я
                    <Field
                      className={styles.form__name}
                      id='name'
                      type='text'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      name='name'
                      placeholder="Ім'я"
                    />
                  </label>
                </div>
                <div className={styles.box__surname}>
                  {errors.surname && (
                    <div className={styles.error__surname}>
                      {errors.surname}
                    </div>
                  )}
                  <label className={styles.label__surname} htmlFor='surname'>
                    Фамілія
                    <Field
                      className={styles.form__surname}
                      id='surname'
                      type='text'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.surname}
                      name='surname'
                      placeholder='Фамілія'
                    />
                  </label>
                </div>
              </div>
              <div className={styles.inputs__wrapper}>
                <div className={styles.box__age}>
                  {errors.age && (
                    <div className={styles.error__age}>{errors.age}</div>
                  )}
                  <label className={styles.label__age} htmlFor='age'>
                    Ваш вік
                    <Field
                      className={styles.form__age}
                      id='age'
                      type='number'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.age}
                      name='age'
                      placeholder='Ваш вік'
                    />
                  </label>
                </div>
                <div className={styles.box__city}>
                  {errors.city && (
                    <div className={styles.error__city}>{errors.city}</div>
                  )}
                  <label className={styles.label__city} htmlFor='city'>
                    Місто
                    <Field
                      className={styles.form__city}
                      id='city'
                      type='text'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.city}
                      name='city'
                      placeholder='Місто'
                    />
                  </label>
                </div>
              </div>
            </div>
            <TypeButton modificator={'settings__btn'} type='submit'>
              {isLoading ? <Loader /> : 'Оновити'}
            </TypeButton>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default memo(UserSettings);
