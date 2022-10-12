import React, { FC } from 'react';
import { IForWhom } from '../../../../../Types/for-whom-types';

import './for-whom-item.scss';

interface IForWhomItemProps {
  item: IForWhom;
}

const ForWhomItem: FC<IForWhomItemProps> = ({ item }) => {
  const { description, human, logo, color } = item;

  return (
    <div className={'item__box'}>
      <div className={`item__obj ${color}`}>
        <object data={logo} type='' aria-label='logo'></object>
      </div>
      <h3 className={'item__title'}>{human}</h3>
      <p className={'item__description'}>{description}</p>
    </div>
  );
};

export default ForWhomItem;
