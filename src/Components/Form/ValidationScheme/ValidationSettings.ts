import * as yup from 'yup';

export const settingsValidation = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Мінімум 2 символи')
    .max(15, 'Максимум 15 символів')
    .matches(/^[0-9а-яА-ЯіІєЄїЇ'a-zA-Z\s]*$/gi, 'Тільки Укр та Англ букви'),

  email: yup
    .string()
    .email(`Приклад: jimmy@gmail.com`)
    .min(4, 'Мінімум 4 символи')
    .max(30, 'Максимум 30 символів')
    .required(`Пошта обов'язкове поле`),
  surname: yup
    .string()
    .min(2, 'Мінімум 2 символи')
    .max(15, 'Максимум 15 символів')
    .matches(/^[0-9а-яА-ЯіІєЄїЇ'a-zA-Z\s]*$/gi, 'Тільки Укр та Англ букви'),
  age: yup
    .string()
    .min(1, 'Мінімум 2 символи')
    .max(2, 'Максимум 2 символів')
    .matches(/^[0-9/s]*$/gi, 'Цифри від 6 до 99'),
  city: yup
    .string()
    .min(2, 'Мінімум 2 символи')
    .max(25, 'Максимум 25 символів')
    .matches(/^[а-яА-ЯіІєЄїЇ'a-zA-Z\s]*$/gi, 'Тільки Укр та Англ букви'),
});
