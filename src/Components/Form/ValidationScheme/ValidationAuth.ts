import * as yup from 'yup';

export const loginValidation = yup.object().shape({
  password: yup
    .string()
    .min(4, 'Мінімум 4 символи')
    .max(15, 'Максимум 15 символів')
    .matches(/^[0-9a-zA-Z]*$/gi, 'Тільки англійські букви та цифри')
    .required(`Пароль обов'язкове поле`),
  email: yup
    .string()
    .email(`Приклад: jimmy@gmail.com`)
    .min(4, 'Мінімум 4 символи')
    .max(30, 'Максимум 30 символів')
    .required(`Пошта обов'язкове поле`),
});

export const registrationValidation = yup.object().shape({
  password: yup
    .string()
    .min(4, 'Мінімум 4 символи')
    .max(15, 'Максимум 15 символів')
    .matches(/^[0-9a-zA-Z]*$/gi, 'Тільки англійські букви та цифри')
    .required(`Пароль обов'язкове поле`),
  email: yup
    .string()
    .email(`Приклад: jimmy@gmail.com`)
    .min(4, 'Мінімум 4 символи')
    .max(30, 'Максимум 30 символів')
    .required(`Пошта обов'язкове поле`),
  confirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Підтвердіть пароль'),
});
