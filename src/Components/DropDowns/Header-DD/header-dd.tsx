import React, { FC } from 'react';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../Constants/Routes/routes';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

import styles from './header-dd.module.scss';

interface IHeaderDD {
  type: boolean;
}

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link to={ROUTES.FAQ} className={styles.dropdown__link}>
        FAQ
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to={ROUTES.SUGGESTIONS} className={styles.dropdown__link}>
        Пропозиції
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link to={ROUTES.SUPPORT} className={styles.dropdown__link}>
        Підтримка
      </Link>
    ),
  },
];

const HeaderDD: FC<IHeaderDD> = ({ type }) => {
  return (
    <Dropdown menu={{ items }} placement={'bottomLeft'} trigger={['click']}>
      <div
        className={styles.dropdown__header}
        onClick={(e) => e.preventDefault()}
      >
        <Space
          className={type ? styles.dropdown__burger : styles.dropdown__title}
        >
          Також
        </Space>
        <DownOutlined />
      </div>
    </Dropdown>
  );
};

export default HeaderDD;
