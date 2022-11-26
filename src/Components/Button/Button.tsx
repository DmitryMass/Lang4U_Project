import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';

interface IButtonProps {
  children: string | React.ReactElement | any;
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
    <Link to={route} className={modificator} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default Button;
