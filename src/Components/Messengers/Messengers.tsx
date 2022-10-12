import React, { FC } from 'react';
import {
  FacebookOutlined,
  TwitterOutlined,
  YoutubeFilled,
} from '@ant-design/icons';
import './messengers.scss';

interface IMessengersProps {
  modificator: string;
}

const Messengers: FC<IMessengersProps> = ({ modificator }) => {
  return (
    <div className='messengers__container'>
      <a href='https://twitter.com/?lang=ru' target='blank'>
        <TwitterOutlined className={modificator} />
      </a>
      <a href='https://www.facebook.com/' target='blank'>
        <FacebookOutlined className={modificator} />
      </a>
      <a href='https://www.youtube.com/' target='blank'>
        <YoutubeFilled className={modificator} />
      </a>
    </div>
  );
};

export default Messengers;
