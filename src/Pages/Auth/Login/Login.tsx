import React from 'react';
import LoginForm from '../../../Components/Form/Login/LoginForm';

import loginImg from '../../../Assets/Images/login.jpg';

import Auth from '../Auth';
import styles from '../auth.module.scss';

const Login = () => {
  return (
    <Auth
      flex={`${styles.login__flex}`}
      title='Вхід до кабінету'
      image={`${loginImg}`}
    >
      {<LoginForm />}
    </Auth>
  );
};

export default Login;
