import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { ROUTES, ROUTES_USER } from '../../../Constants/Routes/routes';
import {
  BookOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import './user-nav.scss';

const { Sider } = Layout;

const UserNav: FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Sider
        breakpoint={'sm'}
        onBreakpoint={(broken) => {
          broken ? setCollapsed(true) : setCollapsed(false);
        }}
        width={160}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        {collapsed ? (
          <MenuUnfoldOutlined
            className={collapsed ? 'trigger' : 'trigger__active'}
            onClick={() => setCollapsed(!collapsed)}
          />
        ) : (
          <MenuFoldOutlined
            className={collapsed ? 'trigger' : 'trigger__active'}
            onClick={() => setCollapsed(!collapsed)}
          />
        )}
        <Menu
          theme='light'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: (
                <Link to={ROUTES.USERPAGE}>
                  {collapsed ? <UserOutlined /> : 'Головна'}
                </Link>
              ),
            },
            {
              key: '2',
              icon: (
                <Link to={ROUTES_USER.course}>
                  {collapsed ? <BookOutlined /> : 'Курси'}
                </Link>
              ),
            },
            {
              key: '3',
              icon: (
                <Link to={ROUTES_USER.settings}>
                  {collapsed ? <SettingOutlined /> : 'Налаштування'}
                </Link>
              ),
            },
          ]}
        />
      </Sider>
    </>
  );
};

export default UserNav;
