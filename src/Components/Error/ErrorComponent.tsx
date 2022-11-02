import { Alert } from 'antd';
import React, { FC } from 'react';

interface IAlertComponentProps {
  type: 'error' | 'success' | 'info' | 'warning' | undefined;
  message: string;
}

const AlertComponent: FC<IAlertComponentProps> = ({ message, type }) => {
  return (
    <>
      <Alert message={message} type={type} showIcon />
    </>
  );
};

export default AlertComponent;
