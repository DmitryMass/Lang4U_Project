import { Field } from 'formik';
import React, { FC } from 'react';

import styles from '../admin-form.module.scss';

interface IAdminInputProps {
  error?: string;
  // handleChange: (e: React.ChangeEvent<any>) => void;
  handleChange: any;
  handleBlur: any;
  value: string;
  placeholder: string;
  name?: string;
}

const AdminInput: FC<IAdminInputProps> = ({
  handleChange,
  handleBlur,
  error,
  value,
  placeholder,
  name,
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
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default AdminInput;
