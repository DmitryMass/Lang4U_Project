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
    human: 'schoolchildren',
    description: 'schoolchildrenDesc',
    color: 'item__violet',
  },
  {
    logo: `${hat}`,
    human: 'students',
    description: 'studentsDesc',
    color: 'item__blue',
  },
  {
    logo: `${geo}`,
    human: 'emigrant',
    description: 'emigrantDesc',
    color: 'item__yellow',
  },
  {
    logo: `${message}`,
    human: 'comunicative',
    description: `comunicativeDesc`,
    color: 'item__red',
  },
  {
    logo: `${backpack}`,
    human: 'buisnes',
    description: 'buisnesDesc',
    color: 'item__blue',
  },
  {
    logo: `${ship}`,
    human: 'travel',
    description: 'travelDesc',
    color: 'item__violet',
  },
];
