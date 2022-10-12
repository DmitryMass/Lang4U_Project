import complete from '../../../Assets/Icons/complete.svg';
import hat from '../../../Assets/Icons/hat.svg';
import geo from '../../../Assets/Icons/geoposition.svg';
import message from '../../../Assets/Icons/message.svg';
import backpack from '../../../Assets/Icons/backpack.svg';
import ship from '../../../Assets/Icons/ship.svg';
import { IForWhom } from '../../../Types/for-whom-types';

export const forWhom: IForWhom[] = [
  {
    logo: `${complete}`,
    human: 'Школярам',
    description: 'Скласти випускні іспити або вступити до ВНЗ.',
    color: 'item__violet',
  },
  {
    logo: `${hat}`,
    human: 'Студентам',
    description:
      'Переїхати на навчання в іншу країну або знайти високооплачувану роботу',
    color: 'item__blue',
  },
  {
    logo: `${geo}`,
    human: 'Емігрантам',
    description:
      'Адаптуватися в новій країні, створити конкурентну перевагу та працевлаштуватися',
    color: 'item__yellow',
  },
  {
    logo: `${message}`,
    human: 'Комунікабельним',
    description: `Створити щасливу сім'ю з іноземцем і інтегруватися в нове суспільство`,
    color: 'item__red',
  },
  {
    logo: `${backpack}`,
    human: 'Бізнесменам',
    description:
      'Завести полезные знакомства среди иностранцев и масштабировать бизнес',
    color: 'item__blue',
  },
  {
    logo: `${ship}`,
    human: 'Мандрівникам',
    description:
      'Вільно спілкуватися та знаходити нових друзів, вирішувати побутові питання та спірні ситуації',
    color: 'item__violet',
  },
];
