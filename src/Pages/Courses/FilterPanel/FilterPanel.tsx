import React, { FC } from 'react';
import TypeButton from '../../../Components/Button/TypeButton/TypeButton';
import useFilter from '../../../Components/hooks/useFilter';

type IFilterPanel = string[];

const FilterPanel: FC = () => {
  const { chooseCategory } = useFilter();

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
            {item}
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
