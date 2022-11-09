import React, { FC, useState, useCallback } from 'react';
import { ROUTES_USER } from '../../../Constants/Routes/routes';
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
  const [trigger, setTrigger] = useState(true);

  const handleClick = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);

  return (
    <div className='menu'>
      <Sider
        breakpoint={'sm'}
        onBreakpoint={(broken) => {
          broken ? setCollapsed(true) : setCollapsed(false);
          broken ? setTrigger(false) : setTrigger(true);
        }}
        width={160}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        {trigger ? (
          collapsed ? (
            <MenuUnfoldOutlined
              className={collapsed ? 'trigger' : 'trigger__active'}
              onClick={handleClick}
            />
          ) : (
            <MenuFoldOutlined
              className={collapsed ? 'trigger' : 'trigger__active'}
              onClick={handleClick}
            />
          )
        ) : null}
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: (
                <Link to={ROUTES_USER.main}>
                  {collapsed ? (
                    <UserOutlined style={{ color: 'black' }} />
                  ) : (
                    'Головна'
                  )}
                </Link>
              ),
            },
            {
              key: '2',
              icon: (
                <Link to={ROUTES_USER.course}>
                  {collapsed ? (
                    <BookOutlined style={{ color: 'black' }} />
                  ) : (
                    'Курси'
                  )}
                </Link>
              ),
            },
            {
              key: '3',
              icon: (
                <Link to={ROUTES_USER.settings}>
                  {collapsed ? (
                    <SettingOutlined style={{ color: 'black' }} />
                  ) : (
                    'Налаштування'
                  )}
                </Link>
              ),
            },
          ]}
        />
      </Sider>
    </div>
  );
};

export default UserNav;
