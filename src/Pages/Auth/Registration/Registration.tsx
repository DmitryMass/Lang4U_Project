import React from 'react';
import RegistrationForm from '../../../Components/Form/Register/RegistrationForm';
import Auth from '../Auth';

import registrationImg from '../../../Assets/Images/registration.jpg';
import { useTranslation } from 'react-i18next';

import styles from '../auth.module.scss';

const Registration = () => {
  const { t } = useTranslation();

  return (
    <Auth
      flex={styles.registration__flex}
      title={`${t('signUp')}`}
      image={`${registrationImg}`}
    >
      <RegistrationForm />
    </Auth>
  );
};

export default Registration;
