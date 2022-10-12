import { ArrowRightOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ICoursesList } from '../../../../Types/courses-list-types';

import './course-swiper-item.scss';

interface ICourseItemProps {
  item: ICoursesList;
}

const CourseSwiperItem: FC<ICourseItemProps> = ({ item }) => {
  const { details, duration, logo, modules, price, title, color, link } = item;

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
        <Link className={'course__link'} to={link}>
          {details}
          <ArrowRightOutlined />
        </Link>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default CourseSwiperItem;
