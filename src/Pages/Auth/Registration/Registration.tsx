import React from 'react';
import RegistrationForm from '../../../Components/Form/Register/RegistrationForm';
import Auth from '../Auth';

import registrationImg from '../../../Assets/Images/registration.jpg';
import styles from '../auth.module.scss';

const Registration = () => {
  return (
    <Auth
      flex={styles.registration__flex}
      title='Зареєструватись'
      image={`${registrationImg}`}
    >
      <RegistrationForm />
    </Auth>
  );
};

export default Registration;
