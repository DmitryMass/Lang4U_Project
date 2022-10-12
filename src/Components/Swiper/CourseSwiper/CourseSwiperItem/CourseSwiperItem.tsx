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
      <h3>{title}</h3>
      <div>
        <p>
          Тривалість: <span>{duration}</span>
        </p>
        <p>
          Модулей: <span>{modules}</span>
        </p>
      </div>
      <div>
        <Link to={link}>{details}</Link>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default CourseSwiperItem;
