import React, { FC } from 'react';
import TypeButton from '../../../Components/Button/TypeButton/TypeButton';
import useFilter from '../../../Components/hooks/useFilter';
import { useTranslation } from 'react-i18next';

type IFilterPanel = string[];

const FilterPanel: FC = () => {
  const { chooseCategory } = useFilter();
  const { t } = useTranslation();

  return (
    <>
      {filterPanel.map((item) => {
        return (
          <TypeButton
            key={item}
            handleClick={() => chooseCategory(item)}
            modificator='filter__btn'
            type='button'
          >
            {`${t(item)}`}
          </TypeButton>
        );
      })}
    </>
  );
};

const filterPanel: IFilterPanel = [
  'Всі',
  'Англійська',
  'Німецька',
  'Іспанська',
  'Китайська',
];

export default FilterPanel;
