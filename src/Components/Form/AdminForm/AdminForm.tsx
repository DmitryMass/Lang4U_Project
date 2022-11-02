import React, { FC } from 'react';
import { Formik } from 'formik';
import AlertComponent from '../../Error/ErrorComponent';

import styles from './admin-form.module.scss';
import { useCreateCourseMutation } from '../../../Store/Api-Query/Courses/courses';
import Loader from '../../Loader/Loader';
import TypeButton from '../../Button/TypeButton/TypeButton';
import AdminInput from './AdminInput/AdminInput';

export interface IAdminCourse {
  logo: string;
  title: string;
  duration: string;
  modules: string;
  details: string;
  price: string;
  color: string;
  link: string;
  lessons: string;
  task: string;
  tests: string;
  expert: string;
}

const AdminForm: FC = () => {
  const [createCourse, { isError, isLoading }] = useCreateCourseMutation();

  const formikHandleSubmit = async (
    values: IAdminCourse,
    { resetForm }: any
  ) => {
    console.log({ ...values });

    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{
          logo: '',
          title: '',
          duration: '',
          color: 'course__',
          details: 'Дізнатись детальніше',
          expert: '',
          lessons: '',
          link: '/',
          modules: '',
          price: 'Від',
          task: '',
          tests: '',
        }}
        onSubmit={formikHandleSubmit}
        validationSchema={''}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.form__wrapper}>
              {isError && (
                <AlertComponent
                  type='error'
                  message='Помилка, спробуйте ще раз.'
                />
              )}
            </div>
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.color}
              value={values.logo}
              placeholder={'Логотип'}
            />
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.title}
              value={values.title}
              placeholder={'Назва курсу'}
            />
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.duration}
              value={values.duration}
              placeholder={'Тривалість годин'}
            />
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.color}
              value={values.color}
              placeholder={'Колір боксу'}
            />
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.details}
              value={values.details}
              placeholder={'Дізнатись детальніше'}
            />
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.lessons}
              value={values.lessons}
              placeholder={'Кількість занять'}
            />
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.link}
              value={values.link}
              placeholder={'Силка на кожен курс'}
            />
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.modules}
              value={values.modules}
              placeholder={'Кількість модулей'}
            />
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.tests}
              value={values.tests}
              placeholder={'Кількість тестів'}
            />
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.task}
              value={values.task}
              placeholder={'Кількість завдань'}
            />
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.expert}
              value={values.expert}
              placeholder={'Кількість занять з викладачем'}
            />
            <TypeButton modificator={'auth__btn'} type='submit'>
              {isLoading ? <Loader /> : 'Створити курс'}
            </TypeButton>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AdminForm;
