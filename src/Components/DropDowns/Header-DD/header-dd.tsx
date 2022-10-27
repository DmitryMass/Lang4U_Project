import React, { FC } from 'react';
import { Dropdown, Menu, Space } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../Constants/Routes/routes';
import { DownOutlined } from '@ant-design/icons';

import styles from './header-dd.module.scss';

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <Link className={styles.dropdown__link} to={ROUTES.FAQ}>
            FAQ
          </Link>
        ),
      },
      {
        key: '2',
        label: (
          <Link className={styles.dropdown__link} to={ROUTES.PAYMENT}>
            Умови оплати
          </Link>
        ),
      },
      {
        key: '3',
        label: (
          <Link className={styles.dropdown__link} to={ROUTES.SUPPORT}>
            Підтримка
          </Link>
        ),
      },
    ]}
  />
);

const HeaderDD: FC = () => {
  return (
    <Dropdown overlay={menu}>
      <div
        className={styles.dropdown__header}
        onClick={(e) => e.preventDefault()}
      >
        <Space>Ще</Space>
        <DownOutlined />
      </div>
    </Dropdown>
  );
};

export default HeaderDD;
