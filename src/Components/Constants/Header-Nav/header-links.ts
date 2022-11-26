import { IHeaderLinks } from '../../../Types/header-links-types';
import { ROUTES } from '../Routes/routes';

export const headerLinks: IHeaderLinks[] = [
  {
    link: ROUTES.COURSES,
    title: 'courses',
  },
  {
    link: ROUTES.ABOUTUS,
    title: 'about',
  },
  {
    link: ROUTES.CONTACTS,
    title: 'contacts',
  },
];
