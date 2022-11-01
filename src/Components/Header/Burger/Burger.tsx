import React, { FC } from 'react';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { headerLinks } from '../../Constants/Header-Nav/header-links';
import { ROUTES } from '../../Constants/Routes/routes';
import Button from '../../Button/Button';
import Nav from '../../Navigation/Nav';
import HeaderNavItem from '../Header-Nav/HeaderNavItem';

import { IHeaderLinks } from '../../../Types/header-links-types';
import styles from './burger.module.scss';
import useTypedSelector from '../../../Store/hooks-store/useTypedSelector';
import useLogout from '../../hooks/useLogout';
import useModal from '../../hooks/modal';
import { useDispatch } from 'react-redux';

const Burger: FC = () => {
  const dispatch = useDispatch();
  const { handleCancel, isModalOpen, showModal } = useModal();
  const { user } = useTypedSelector((state) => state.userToken);
  const { handleLogout } = useLogout();

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
          {user ? (
            <Button
              children={'Вийти'}
              modificator={'burger__login'}
              route={ROUTES.HOME}
              handleClick={() => {
                handleLogout();
                dispatch(handleCancel());
              }}
            />
          ) : (
            <Button
              children={'Увійти'}
              modificator={'burger__login'}
              route={ROUTES.LOGIN}
              handleClick={() => dispatch(handleCancel())}
            />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Burger;
