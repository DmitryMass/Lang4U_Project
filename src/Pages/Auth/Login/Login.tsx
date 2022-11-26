import React from 'react';
import LoginForm from '../../../Components/Form/Login/LoginForm';

import loginImg from '../../../Assets/Images/login.jpg';
import { useTranslation } from 'react-i18next';

import Auth from '../Auth';
import styles from '../auth.module.scss';

const Login = () => {
  const { t } = useTranslation();

  return (
    <Auth
      flex={`${styles.login__flex}`}
      title={`${t('signIn')}`}
      image={`${loginImg}`}
    >
      {<LoginForm />}
    </Auth>
  );
};

export default Login;
