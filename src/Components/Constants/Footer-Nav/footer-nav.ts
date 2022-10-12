import { IFooterEducation, IFooterInfo } from '../../../Types/footer-links';
import { ROUTES } from '../Routes/routes';

export const footerEducation: IFooterEducation[] = [
  {
    link: ROUTES.ALLLANG,
    title: 'Всі мови',
  },
  {
    link: ROUTES.PAYMENT,
    title: 'Умови оплати',
  },
  {
    link: ROUTES.REVIEWS,
    title: 'Відгуки',
  },
];

export const footerInfo: IFooterInfo[] = [
  {
    link: ROUTES.ABOUTUS,
    title: 'Про нас',
  },
  {
    link: ROUTES.FAQ,
    title: 'Поширені питання',
  },
  {
    link: ROUTES.CONTACTS,
    title: 'Контакти',
  },
];
