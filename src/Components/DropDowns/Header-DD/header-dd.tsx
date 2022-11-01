import React, { FC } from 'react';
import { Dropdown, Menu, Space } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../Constants/Routes/routes';
import { DownOutlined } from '@ant-design/icons';

import styles from './header-dd.module.scss';

interface IHeaderDD {
  type: boolean;
}

const HeaderDD: FC<IHeaderDD> = ({ type }) => {
  const menu = (
    <Menu
      items={[
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
            <Link to={ROUTES.PAYMENT} className={styles.dropdown__link}>
              Умови оплати
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
      ]}
    />
  );

  return (
    <Dropdown overlay={menu} placement={'bottomLeft'} trigger={['click']}>
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
