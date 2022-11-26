import React, { FC } from 'react';
import { IForWhom } from '../../../../../Types/for-whom-types';
import { useTranslation } from 'react-i18next';

import './for-whom-item.scss';

interface IForWhomItemProps {
  item: IForWhom;
}

const ForWhomItem: FC<IForWhomItemProps> = ({ item }) => {
  const { description, human, logo, color } = item;
  const { t } = useTranslation();

  return (
    <div className={'item__box'}>
      <div className={`item__obj ${color}`}>
        <object data={logo} type='' aria-label='logo'></object>
      </div>
      <h3 className={'item__title'}>{t(human)}</h3>
      <p className={'item__description'}>{t(description)}</p>
    </div>
  );
};

export default ForWhomItem;
