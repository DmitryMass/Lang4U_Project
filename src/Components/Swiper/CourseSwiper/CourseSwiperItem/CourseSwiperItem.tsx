import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import ICoursesList from '../../../../Types/courses-list-types';
import { ROUTES } from '../../../Constants/Routes/routes';
import { useTranslation } from 'react-i18next';

import './course-swiper-item.scss';

interface ICourseItemProps {
  item: ICoursesList;
}

const CourseSwiperItem: FC<ICourseItemProps> = ({ item }) => {
  const { details, lessons, logo, modules, price, title, color, link } = item;
  const navigate = useNavigate();
  const { t } = useTranslation();

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
      <h3 className={'course__title'}>{t(title)}</h3>
      <div className={'course__info'}>
        <p className={'course__duration'}>
          {t('homeCourseLessons')} <span>{lessons}</span>
        </p>
        <p className={'course__modules'}>
          {t('homeCourseModules')} <span>{modules}</span>
        </p>
      </div>
      <div className={'course__price'}>
        <div
          className={'course__link'}
          onClick={() => navigate(`${ROUTES.COURSES}/${link}`)}
        >
          {t(details)}
          <ArrowRightOutlined />
        </div>
        <p>
          {t('priceFrom')} {price} {t('uah')}
        </p>
      </div>
    </div>
  );
};

export default CourseSwiperItem;
