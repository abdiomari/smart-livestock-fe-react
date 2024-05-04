// import { useEffect, useState } from 'react';
// import { Outlet } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import MainCard from '../../ui-component/cards/MainCard';
import { ActiveSensorsCard, AnimalsCard } from './statCards';
import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} xs={12}>
            <AnimalsCard />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <ActiveSensorsCard />
          </Grid>
          {/* <TemperatureStatsCard /> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
