import React, { FC } from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../Constants/Routes/routes';
import './tabs.scss';

const Tabs: FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const breadCrumbView = () => {
    const { pathname: name } = location;
    const pathname = name.replace(/%20/gi, ' ');

    const pathnames = pathname.split('/').filter((item) => item);
    const capatilize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
    return (
      <div className='tabs__container'>
        <Breadcrumb>
          {pathnames.length > 0 ? (
            <Breadcrumb.Item>
              <Link to={ROUTES.HOME}>
                <HomeOutlined />
              </Link>
            </Breadcrumb.Item>
          ) : null}
          {pathnames.map((name, index) => {
            console.log(name);
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Breadcrumb.Item key={name}>
                {capatilize(t(`${name}`))}
              </Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item key={name}>
                <Link to={`${routeTo}`}>{capatilize(t(`${name}`))}</Link>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
    );
  };

  return <>{breadCrumbView()}</>;
};

export default Tabs;
