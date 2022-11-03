import React, { FC } from 'react';
import './type-button.scss';

interface ITypeButton {
  type?: 'button' | 'submit' | 'reset' | undefined;
  handleClick?: () => void;
  modificator: string;
  children?: string | React.ReactElement;
}

const TypeButton: FC<ITypeButton> = ({
  children,
  type,
  handleClick,
  modificator,
}) => {
  return (
    <button className={modificator} type={type} onClick={handleClick}>
      {children ? children : 'Текст кудись зник.'}
    </button>
  );
};

export default TypeButton;
