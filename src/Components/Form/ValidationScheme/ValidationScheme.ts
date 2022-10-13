import * as yup from 'yup';

export const emailValidation = yup.object().shape({
  email: yup
    .string()
    .email(`Приклад: jimmy@gmail.com`)
    .min(4, 'Мінімум 4 символи')
    .max(30, 'Максимум 30 символів')
    .required(`Пошта обов'язкове поле`),
  rules: yup.bool().oneOf([true], `Обов'язковий маркер`),
});
