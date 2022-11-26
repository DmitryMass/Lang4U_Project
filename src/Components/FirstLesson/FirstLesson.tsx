import React, { FC } from 'react';
import { Formik, Field } from 'formik';

import { emailValidation } from '../Form/ValidationScheme/ValidationScheme';

import lesson from '../../Assets/Images/lesson.jpg';
import TypeButton from '../Button/TypeButton/TypeButton';
import { Link } from 'react-router-dom';
import { ROUTE_POLICY } from '../Constants/Routes/routes';
import MainTitle from '../Text/Titles/MainTitle';
import { useFirstLesson } from '../hooks/useFirstLesson';
import Loader from '../Loader/Loader';
import { useTranslation } from 'react-i18next';

import styles from './first-lesson.module.scss';

const FirstLesson: FC = () => {
  const { t } = useTranslation();

  const { formikHandleSubmit, isLoading } = useFirstLesson();
  return (
    <section className={styles.lesson}>
      <div className={styles.lesson__free}>
        <MainTitle modificator='lesson__title'>
          {t('freeLessonTitle')}
        </MainTitle>
        <Formik
          initialValues={{ email: '', rules: false }}
          onSubmit={formikHandleSubmit}
          validationSchema={emailValidation}
        >
          {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
            <form onSubmit={handleSubmit}>
              <div className={styles.lesson__emailBox}>
                {errors.email && (
                  <div className={styles.input__error}>{t(errors.email)}</div>
                )}
                <label className={styles.input__label} htmlFor='email'>
                  {t('email')}:
                  <Field
                    className={styles.formik__input}
                    id='email'
                    type='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    name='email'
                    placeholder={`${t('emailPlaceholder')}`}
                  />
                </label>
                <TypeButton modificator={'button__lesson'} type='submit'>
                  {isLoading ? <Loader /> : `${t('freeLessonBtn')}`}
                </TypeButton>
              </div>
              <div className={styles.lesson__rulesBox}>
                {errors.rules && (
                  <div className={styles.checkbox__error}>
                    {t(errors.rules)}
                  </div>
                )}
                <Field
                  className={styles.formik__checkbox}
                  id='rules'
                  type='checkbox'
                  name='rules'
                />
                <p className={styles.checkbox__label}>
                  {t('agreement')}{' '}
                  <Link to={ROUTE_POLICY.privacePolicy}>{t('politic')}</Link>{' '}
                  {t('and')}{' '}
                  <Link to={ROUTE_POLICY.agreement}>
                    {t('userAgreementLink')}
                  </Link>
                </p>
              </div>
            </form>
          )}
        </Formik>
      </div>
      <div className={styles.lesson__img}>
        <img src={lesson} alt='lesson1' />
      </div>
    </section>
  );
};

export default FirstLesson;
