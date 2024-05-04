import { Typography, Grid } from '@mui/material';
import MainCard from '../../ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';

const Sensors = () => {
  const sensorData = [
    {
      name: 'Temperature Sensor',
      status: 'Active'
    },
    {
      name: 'Humidity Sensor',
      status: 'Active'
    },
    {
      name: 'Light Sensor',
      status: 'Inactive'
    },
    {
      name: 'Motion Sensor',
      status: 'Active'
    }
  ];
  return (
    <MainCard>
      <Typography variant="h1">Device Management</Typography>
      <Grid container spacing={gridSpacing}>
      {sensorData.map((sensor, index) => (
        <Grid item lg={4} md={6} xs={12} key={index}>
          <SubCard sx={{mb:3, boxShadow: '0px 8px 12px 0px rgba(0,0,0, 0.25)' }}>
            <Typography variant="h3">{sensor.name}</Typography>
            <Typography variant="h4">{sensor.status}</Typography>
          </SubCard>
        </Grid>
      ))}
      </Grid>
    </MainCard>
  );
};

export default Sensors;
