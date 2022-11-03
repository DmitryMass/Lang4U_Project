import * as yup from 'yup';

export const courseValidation = yup.object().shape({
  logo: yup
    .string()
    .min(2, 'Приклад: https://www.svgrepo.com/show/132022/china.svg.')
    .matches(
      /^[0-9a-zA-Z/:,.;&$^*()#@!-=+_]*$/gi,
      'Приклад: https://www.svgrepo.com/show/132022/china.svg.'
    )
    .required(`Приклад: https://www.svgrepo.com/show/132022/china.svg.`),
  title: yup
    .string()
    .min(4, 'Мінімум 4 символи')
    .max(100, 'Максимум 30 символів')
    .matches(/^[а-яА-ЯіІєЄїЇ'a-zA-Z\s]*$/gi, 'Тільки Укр та Англ букви')
    .required(`Назва обов'язкове поле`),
  price: yup
    .string()
    .min(2, 'Мінімум 2 символи')
    .max(30, 'Максимум 30 символів')
    .matches(/^[а-яА-ЯіІєЄїЇ'a-zA-Z0-9\s]*$/gi, 'Букви та цифри')
    .required(`Ціна обов'язкове поле`),
  duration: yup
    .string()
    .min(1, 'Мінімум 1 символи')
    .max(10, 'Максимум 30 символів')
    .matches(/^[0-9]*$/gi, 'Тільки цифри')
    .required(`Тривалість обов'язкове поле`),
  color: yup
    .string()
    .min(1, 'Мінімум 1 символи')
    .max(25, 'Максимум 30 символів')
    .matches(/^[a-zA-Z-_]*$/gi, 'Англ букви')
    .required(`Наприклад: course__green, course__red..`),
  details: yup
    .string()
    .min(4, 'Мінімум 4 символи')
    .max(60, 'Максимум 30 символів')
    .matches(/^[а-яА-ЯіІєЄїЇ'a-zA-Z\s]*$/gi, 'Тільки Укр та Англ букви')
    .required(`Деталі обов'язкове поле`),
  link: yup
    .string()
    .min(2, 'Мінімум 2 символи')
    .matches(/^[0-9a-zA-Z/:,.;&$^*()#@!-=+_\s]*$/gi, 'Букви цифри символи.')
    .required(`Приклад: /english Elementary`),
  lessons: yup
    .string()
    .min(1, 'Мінімум 1 символи')
    .max(10, 'Максимум 30 символів')
    .matches(/^[0-9]*$/gi, 'Тільки цифри')
    .required(`Уроки обов'язкове поле`),
  task: yup
    .string()
    .min(1, 'Мінімум 1 символи')
    .max(10, 'Максимум 30 символів')
    .matches(/^[0-9]*$/gi, 'Тільки цифри')
    .required(`Завдання обов'язкове поле`),
  tests: yup
    .string()
    .min(1, 'Мінімум 1 символи')
    .max(10, 'Максимум 30 символів')
    .matches(/^[0-9]*$/gi, 'Тільки цифри')
    .required(`Тести обов'язкове поле`),
  expert: yup
    .string()
    .min(1, 'Мінімум 1 символи')
    .max(10, 'Максимум 30 символів')
    .matches(/^[0-9]*$/gi, 'Тільки цифри')
    .required(`Експерт обов'язкове поле`),
  modules: yup
    .string()
    .min(1, 'Мінімум 1 символи')
    .max(10, 'Максимум 30 символів')
    .matches(/^[0-9]*$/gi, 'Тільки цифри')
    .required(`Модулі обов'язкове поле`),
});
