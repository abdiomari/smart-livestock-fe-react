// assets
import { IconDashboard } from '@tabler/icons-react';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const geofence = {
  id: 'geofence',
  title: 'Geofence',
  type: 'group',
  children: [
    {
      id: 'geofence',
      title: 'Geofence',
      type: 'item',
      url: '/geofence',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default geofence;