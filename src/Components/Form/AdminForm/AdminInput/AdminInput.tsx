import { Field } from 'formik';
import React, { FC } from 'react';

import styles from '../admin-form.module.scss';

interface IAdminInputProps {
  error?: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  value: string;
  placeholder: string;
}

const AdminInput: FC<IAdminInputProps> = ({
  handleChange,
  handleBlur,
  error,
  value,
  placeholder,
}) => {
  return (
    <div className={styles.input__box}>
      {error && <div className={styles.input__error}>{error}</div>}
      <Field
        className={styles.form__input}
        id='input'
        type='text'
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        name='input'
        placeholder={placeholder}
      />
    </div>
  );
};

export default AdminInput;
