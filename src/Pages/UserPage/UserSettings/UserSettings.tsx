import React, { FC, memo } from 'react';
import { Field, Formik } from 'formik';
import TypeButton from '../../../Components/Button/TypeButton/TypeButton';
import Loader from '../../../Components/Loader/Loader';

import { useSettings } from '../../../Components/hooks/useSettings';
import { settingsValidation } from '../../../Components/Form/ValidationScheme/ValidationSettings';

import { useTranslation } from 'react-i18next';

import styles from './user-settings.module.scss';

interface IUserSettingsProps {
  data: any;
}

const UserSettings: FC<IUserSettingsProps> = ({ data }) => {
  const { t } = useTranslation();

  const { handleUpdateUserInfo, isLoading } = useSettings();
  return (
    <div className={styles.settings}>
      <h3 className={styles.settings__title}>{t('personalData')}</h3>
      <Formik
        initialValues={{
          email: `${data?.email ? data?.email : ''}`,
          name: `${data?.name ? data?.name : ''}`,
          surname: `${data?.surname ? data?.surname : ''}`,
          city: `${data?.city ? data?.city : ''}`,
          age: `${data?.age ? data?.age : ''}`,
        }}
        onSubmit={handleUpdateUserInfo}
        validationSchema={settingsValidation}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.form__inputWrapper}>
              <div className={styles.box__email}>
                {errors.email && (
                  <div className={styles.error__email}>{t(errors.email)}</div>
                )}
                <label className={styles.label__email} htmlFor='email'>
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
              <div className={styles.inputs__wrapper}>
                <div className={styles.box__name}>
                  {errors.name && (
                    <div className={styles.error__name}>{t(errors.name)}</div>
                  )}
                  <label className={styles.label__name} htmlFor='name'>
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
                <div className={styles.box__surname}>
                  {errors.surname && (
                    <div className={styles.error__surname}>
                      {t(errors.surname)}
                    </div>
                  )}
                  <label className={styles.label__surname} htmlFor='surname'>
                    {t('surname')}
                    <Field
                      className={styles.form__surname}
                      id='surname'
                      type='text'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.surname}
                      name='surname'
                      placeholder={`${t('surname')}`}
                    />
                  </label>
                </div>
              </div>
              <div className={styles.inputs__wrapper}>
                <div className={styles.box__age}>
                  {errors.age && (
                    <div className={styles.error__age}>{t(errors.age)}</div>
                  )}
                  <label className={styles.label__age} htmlFor='age'>
                    {t('age')}
                    <Field
                      className={styles.form__age}
                      id='age'
                      type='number'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.age}
                      name='age'
                      placeholder={`${t('age')}`}
                    />
                  </label>
                </div>
                <div className={styles.box__city}>
                  {errors.city && (
                    <div className={styles.error__city}>{t(errors.city)}</div>
                  )}
                  <label className={styles.label__city} htmlFor='city'>
                    {t('city')}
                    <Field
                      className={styles.form__city}
                      id='city'
                      type='text'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.city}
                      name='city'
                      placeholder={`${t('city')}`}
                    />
                  </label>
                </div>
              </div>
            </div>
            <TypeButton modificator={'settings__btn'} type='submit'>
              {isLoading ? <Loader /> : `${t('update')}`}
            </TypeButton>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default memo(UserSettings);
