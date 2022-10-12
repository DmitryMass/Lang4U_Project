import { IHeaderLinks } from '../../../Types/header-links-types';
import { ROUTES } from '../Routes/routes';

export const headerLinks: IHeaderLinks[] = [
  {
    link: ROUTES.COURSES,
    title: 'Курси',
  },
  {
    link: ROUTES.ABOUTUS,
    title: 'Про нас',
  },
  {
    link: ROUTES.CONTACTS,
    title: 'Контакти',
  },
];
