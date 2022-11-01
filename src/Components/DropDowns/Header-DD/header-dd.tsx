import React, { FC } from 'react';
import { Dropdown, Menu, Space } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../Constants/Routes/routes';
import { DownOutlined } from '@ant-design/icons';

import styles from './header-dd.module.scss';
import useModal from '../../hooks/modal';
import { useDispatch } from 'react-redux';

const HeaderDD: FC = () => {
  const dispatch = useDispatch();
  const { handleCancel } = useModal();
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <Link
              to={ROUTES.FAQ}
              onClick={() => dispatch(handleCancel())}
              className={styles.dropdown__link}
            >
              FAQ
            </Link>
          ),
        },
        {
          key: '2',
          label: (
            <Link
              to={ROUTES.PAYMENT}
              onClick={() => dispatch(handleCancel())}
              className={styles.dropdown__link}
            >
              Умови оплати
            </Link>
          ),
        },
        {
          key: '3',
          label: (
            <Link
              to={ROUTES.SUPPORT}
              onClick={() => dispatch(handleCancel())}
              className={styles.dropdown__link}
            >
              Підтримка
            </Link>
          ),
        },
      ]}
    />
  );

  return (
    <Dropdown overlay={menu} placement={'bottomLeft'}>
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
