// import { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
// import Loadable from '../ui-component/Loadable';

// dashboard routing
import Dashboard from '../views/dashboard';
import Sensors from '../views/sensors';
import Animals from '../views/animals';
import Geofence from '../views/geofence';
// import NewAnimals from '../views/NewAnimals';
// const DashboardDefault = Loadable(lazy(() => import('../views/dashboard')));
// const Animals = Loadable(lazy(() => import('../views/animals')));
// const Geofence = Loadable(lazy(() => import('../views/geofence')));
// const Sensors = Loadable(lazy(() => import('../views/sensors')));

const MainRoutes ={
 
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'dashboard',
      element: <Dashboard />
    },
    {
      path:'animals',
      element: <Animals />,
    },
    {
      path:'sensors',
      element: <Sensors />
    },
    {
      path:'geofence',
      element: <Geofence />
    },
  ]
 
};

export default MainRoutes;
