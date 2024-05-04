// assets
import { IconDashboard } from '@tabler/icons-react';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const animals = {
  id: 'animals',
  title: 'Animals',
  type: 'group',
  children: [
    {
      id: 'animals',
      title: 'Animals',
      type: 'item',
      url: '/animals',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'newAnimals',
      title: 'Add Animals',
      type: 'item',
      url: '/animals/new',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default animals;
