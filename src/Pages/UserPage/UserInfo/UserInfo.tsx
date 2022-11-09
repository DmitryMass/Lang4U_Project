import React, { FC } from 'react';
import MainTitle from '../../../Components/Text/Titles/MainTitle';

const UserInfo: FC = () => {
  return (
    <div>
      <MainTitle
        span={<span className='suggestions__span'>Lang4U</span>}
        modificator='userpage__title'
      >
        Ласкаво просимо до
      </MainTitle>
      <div></div>
    </div>
  );
};

export default UserInfo;
