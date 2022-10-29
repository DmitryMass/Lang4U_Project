import React, { FC } from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import './tabs.scss';
import { ROUTES } from '../Constants/Routes/routes';

const Tabs: FC = () => {
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
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Breadcrumb.Item key={name}>{capatilize(name)}</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item key={name}>
                <Link to={`${routeTo}`}>{capatilize(name)}</Link>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
    );
  };

  return <>{breadCrumbView()}</>;
  // return (
  //   <div >
  //     <Breadcrumb>
  //       <Breadcrumb.Item>
  //         <Link to={'/'}>
  //           <HomeOutlined />
  //         </Link>
  //       </Breadcrumb.Item>
  //       <Breadcrumb.Item>{currentPage}</Breadcrumb.Item>
  //       {/* <Breadcrumb.Item></Breadcrumb.Item>
  //     <Breadcrumb.Item></Breadcrumb.Item> */}
  //     </Breadcrumb>
  //   </div>
  // );
};

export default Tabs;
