import React, { FC } from 'react';
import { Formik } from 'formik';
import AlertComponent from '../../Error/ErrorComponent';

import styles from './admin-form.module.scss';
import { useCreateCourseMutation } from '../../../Store/Api-Query/Courses/courses';
import Loader from '../../Loader/Loader';
import TypeButton from '../../Button/TypeButton/TypeButton';
import AdminInput from './AdminInput/AdminInput';
import { courseValidation } from '../ValidationScheme/ValidationCourse';

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
  const [createCourse, { isError, isLoading, isSuccess }] =
    useCreateCourseMutation();

  const formikHandleSubmit = async (
    values: IAdminCourse,
    { resetForm }: any
  ) => {
    try {
      await createCourse({ ...values });
    } catch (e) {
      console.log(e);
    }

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
          link: '',
          modules: '',
          price: 'Від',
          task: '',
          tests: '',
        }}
        onSubmit={formikHandleSubmit}
        validationSchema={courseValidation}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
          <form onSubmit={handleSubmit}>
            {isError && (
              <AlertComponent
                type='error'
                message='Помилка, спробуйте ще раз.'
              />
            )}
            {isSuccess && (
              <AlertComponent type='success' message='Курс створено.' />
            )}
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.logo}
              value={values.logo}
              name={'logo'}
              placeholder={'Логотип'}
            />
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.title}
              value={values.title}
              placeholder={'Назва курсу'}
              name={'title'}
            />
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.duration}
              value={values.duration}
              placeholder={'Тривалість годин'}
              name={'duration'}
            />
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.price}
              value={values.price}
              placeholder={'Ціна'}
              name={'price'}
            />
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.color}
              value={values.color}
              placeholder={'Колір боксу'}
              name={'color'}
            />
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.details}
              value={values.details}
              placeholder={'Дізнатись детальніше'}
              name={'details'}
            />
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.lessons}
              value={values.lessons}
              placeholder={'Кількість занять'}
              name={'lessons'}
            />
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.link}
              value={values.link}
              placeholder={'Силка на кожен курс'}
              name={'link'}
            />
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.modules}
              value={values.modules}
              placeholder={'Кількість модулей'}
              name={'modules'}
            />
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.tests}
              value={values.tests}
              placeholder={'Кількість тестів'}
              name={'tests'}
            />
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.task}
              value={values.task}
              placeholder={'Кількість завдань'}
              name={'task'}
            />
            <AdminInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.expert}
              value={values.expert}
              placeholder={'Кількість занять з викладачем'}
              name={'expert'}
            />
            <div className={styles.form__submit}>
              <TypeButton modificator={'auth__btn'} type='submit'>
                {isLoading ? <Loader /> : 'Створити курс'}
              </TypeButton>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AdminForm;
