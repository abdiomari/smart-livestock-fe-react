import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAnimals, getActiveSensors } from 'api-service/api';
import SubCard from '../../ui-component/cards/SubCard';

const AnimalsCard = () => {
  const [animals, setAnimals] = useState(0);

  useEffect(() => {
    getAnimals().then(data => setAnimals(data.length));
  }, []);

  return (
    <SubCard title="Number of Animals">
        <Typography variant="h2">{animals}</Typography>
    </SubCard>
  );
};

// const TemperatureStatsCard = () => {
//   const [stats, setStats] = useState([]);

//   useEffect(() => {
//     getTemperatureStats().then(data => setStats(data));
//   }, []);

//   return (
//     <SubCard title="Temp ">
//         {/* Replace this with your chart component */}
//         <Typography variant="h5">Temperature Stats for Individual Animals</Typography>
//     </SubCard>
//   );
// };

const ActiveSensorsCard = () => {
  const [sensors, setSensors] = useState(0);

  useEffect(() => {
    getActiveSensors().then(data => setSensors(data.length));
  }, []);

  return (
    <SubCard title="Active Sensors">
        <Typography variant="h2">{sensors}</Typography>
    </SubCard>
  );
};

export { AnimalsCard, ActiveSensorsCard };