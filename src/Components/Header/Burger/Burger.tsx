import React, { useState } from 'react';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { headerLinks } from '../../Constants/Header-Nav/header-links';
import { ROUTES } from '../../Constants/Routes/routes';
import Button from '../../Button/Button';
import HeaderDD from '../../DropDowns/Header-DD/header-dd';
import Nav from '../../Navigation/Nav';
import HeaderNavItem from '../Header-Nav/HeaderNavItem';

import { IHeaderLinks } from '../../../Types/header-links-types';
import styles from './burger.module.scss';

const Burger = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.burger}>
      <MenuUnfoldOutlined type='primary' onClick={showModal}>
        Open Modal
      </MenuUnfoldOutlined>
      <Modal
        footer={null}
        onCancel={handleCancel}
        title='Lang4U'
        open={isModalOpen}
      >
        <div className={styles.burger__menu}>
          <HeaderDD />
          <Nav
            modificator={styles.burger__nav}
            items={headerLinks}
            renderItems={(item: IHeaderLinks) => (
              <HeaderNavItem
                handleClick={handleCancel}
                elem={item}
                key={item.link}
              />
            )}
          />
          <Button
            handleClick={handleCancel}
            children={'Увійти'}
            modificator={'burger__login'}
            route={ROUTES.LOGIN}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Burger;
