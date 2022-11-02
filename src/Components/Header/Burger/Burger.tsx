import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { headerLinks } from '../../Constants/Header-Nav/header-links';
import { IHeaderLinks } from '../../../Types/header-links-types';
import Nav from '../../Navigation/Nav';
import HeaderNavItem from '../Header-Nav/HeaderNavItem';

import useModal from '../../hooks/modal';
import AuthUser from '../AuthUser';

import styles from './burger.module.scss';

const Burger: FC = () => {
  const dispatch = useDispatch();
  const { handleCancel, isModalOpen, showModal } = useModal();

  return (
    <div className={styles.burger}>
      <MenuUnfoldOutlined type='primary' onClick={() => dispatch(showModal())}>
        Open Modal
      </MenuUnfoldOutlined>
      <Modal
        footer={null}
        onCancel={() => dispatch(handleCancel())}
        title='Lang4U'
        open={isModalOpen}
      >
        <div className={styles.burger__menu}>
          <Nav
            modificator={styles.burger__nav}
            items={headerLinks}
            renderItems={(item: IHeaderLinks) => (
              <HeaderNavItem
                handleClick={() => dispatch(handleCancel())}
                elem={item}
                key={item.link}
              />
            )}
          />
          <AuthUser modificator='burger__login' />
        </div>
      </Modal>
    </div>
  );
};

export default Burger;
