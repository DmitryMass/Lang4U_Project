import React, { FC } from 'react';

import './main-title.scss';

interface IMainTitle {
  children: string;
  modificator: string;
  span?: React.ReactElement | React.ReactFragment | React.ReactNode;
}

const MainTitle: FC<IMainTitle> = ({ children, modificator, span }) => {
  return (
    <h1 className={`title ${modificator}`}>
      {children} {span}
    </h1>
  );
};

export default MainTitle;
