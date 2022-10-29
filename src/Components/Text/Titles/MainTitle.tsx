import React, { FC } from 'react';

import './main-title.scss';

interface IMainTitle {
  children: string | React.ReactElement | React.ReactFragment | React.ReactNode;
  modificator: string;
  span?: React.ReactElement | React.ReactFragment | React.ReactNode | string;
}

const MainTitle: FC<IMainTitle> = ({ children, modificator, span }) => {
  return (
    <h2 className={`title ${modificator}`}>
      {children} {span}
    </h2>
  );
};

export default MainTitle;
