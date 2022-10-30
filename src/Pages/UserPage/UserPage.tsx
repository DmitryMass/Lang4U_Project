import React, { useState, FC } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import styles from './user-page.module.scss';

const { Sider, Content } = Layout;
const UserPage: FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <section className={styles.userpage}>
      <Sider theme='light' trigger={null} collapsible collapsed={collapsed}>
        <div className='logo' />
        {collapsed ? (
          <MenuUnfoldOutlined
            className={styles.trigger}
            onClick={() => setCollapsed(!collapsed)}
          />
        ) : (
          <MenuFoldOutlined
            className={styles.trigger}
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
              icon: <UserOutlined />,
              label: 'Account',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Courses',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Settings',
            },
          ]}
        />
      </Sider>
      <Content
        className='site-layout-background'
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        Content
      </Content>
    </section>
  );
};

export default UserPage;
