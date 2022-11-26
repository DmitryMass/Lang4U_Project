import { IFooterEducation, IFooterInfo } from '../../../Types/footer-links';
import { ROUTES } from '../Routes/routes';

export const footerEducation: IFooterEducation[] = [
  {
    link: ROUTES.COURSES,
    title: 'courses',
  },
  {
    link: ROUTES.PAYMENT,
    title: 'payment',
  },
  {
    link: ROUTES.REVIEWS,
    title: 'reviews',
  },
];

export const footerInfo: IFooterInfo[] = [
  {
    link: ROUTES.ABOUTUS,
    title: 'aboutUs',
  },
  {
    link: ROUTES.FAQ,
    title: 'faq',
  },
  {
    link: ROUTES.CONTACTS,
    title: 'contacts',
  },
];
