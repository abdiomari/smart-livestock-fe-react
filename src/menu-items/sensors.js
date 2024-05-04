// assets
import { IconDashboard } from '@tabler/icons-react';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const sensors = {
  id: 'sensors',
  title: 'Sensors',
  type: 'group',
  children: [
    {
      id: 'sensors',
      title: 'sensors',
      type: 'item',
      url: '/sensors',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default sensors;