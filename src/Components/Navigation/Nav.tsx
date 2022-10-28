import React from 'react';

import './nav.scss';

interface INavProps<T> {
  modificator: string;
  items: T[];
  renderItems: (item: T) => React.ReactNode;
}

function Nav<T>({ items, renderItems, modificator }: INavProps<T>) {
  return <div className={modificator}>{items.map(renderItems)}</div>;
}

export default Nav;
