import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';

interface IButtonProps {
  children: string;
  route: string;
  modificator: string;
  handleClick?: () => void;
}

const Button: FC<IButtonProps> = ({
  children,
  route,
  modificator,
  handleClick,
}) => {
  return (
    <Link className={modificator} to={route} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default Button;
