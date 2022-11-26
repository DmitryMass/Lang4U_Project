import React, { FC } from 'react';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../Constants/Routes/routes';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';

import styles from './header-dd.module.scss';

interface IHeaderDD {
  type: boolean;
}

const HeaderDD: FC<IHeaderDD> = ({ type }) => {
  const { t } = useTranslation();

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link to={ROUTES.FAQ} className={styles.dropdown__link}>
          {t('faq')}
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to={ROUTES.SUGGESTIONS} className={styles.dropdown__link}>
          {t('proposals')}
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link to={ROUTES.SUPPORT} className={styles.dropdown__link}>
          {t('support')}
        </Link>
      ),
    },
  ];
  return (
    <Dropdown menu={{ items }} placement={'bottomLeft'} trigger={['click']}>
      <div
        className={styles.dropdown__header}
        onClick={(e) => e.preventDefault()}
      >
        <Space
          className={type ? styles.dropdown__burger : styles.dropdown__title}
        >
          {t('also')}
        </Space>
        <DownOutlined />
      </div>
    </Dropdown>
  );
};

export default HeaderDD;
