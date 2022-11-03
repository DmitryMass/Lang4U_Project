import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import ICoursesList from '../../../../Types/courses-list-types';
import { ROUTES } from '../../../Constants/Routes/routes';

import './course-swiper-item.scss';

interface ICourseItemProps {
  item: ICoursesList;
}

const CourseSwiperItem: FC<ICourseItemProps> = ({ item }) => {
  const { details, duration, logo, modules, price, title, color, link } = item;
  const navigate = useNavigate();
  return (
    <div className={`course__box ${color}`}>
      <div>
        <object
          className='course__logo'
          data={logo}
          type=''
          aria-label='flag'
        />
      </div>
      <h3 className={'course__title'}>{title}</h3>
      <div className={'course__info'}>
        <p className={'course__duration'}>
          Тривалість: <span>{duration}</span>
        </p>
        <p className={'course__modules'}>
          Модулей: <span>{modules}</span>
        </p>
      </div>
      <div className={'course__price'}>
        <div
          className={'course__link'}
          onClick={() => navigate(`${ROUTES.COURSES}/${link}`)}
        >
          {details}
          <ArrowRightOutlined />
        </div>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default CourseSwiperItem;
