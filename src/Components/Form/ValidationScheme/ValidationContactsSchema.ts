import * as yup from 'yup';

export const contactsValidation = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Мінімум 2 символи')
    .max(15, 'Максимум 15 символів')
    .matches(/^[а-яА-ЯіІєЄїЇ'a-zA-Z]*$/gi, 'Тільки Укр та Англ букви')
    .required(`Ім'я обов'язкове поле`),
  email: yup
    .string()
    .email(`Приклад: jimmy@gmail.com`)
    .min(4, 'Мінімум 4 символи')
    .max(30, 'Максимум 30 символів')
    .trim()
    .required(`Пошта обов'язкове поле`),
});
