import React, { useState } from 'react';
import MainCard from '../../ui-component/cards/MainCard';
import AnimalList from './AnimalList';
import AddAnimals from './AddAnimals';
import { Grid } from '@mui/material';


const Animals = () => {

  const [ animals, setAnimals ] = useState([]);

  return(
      <Grid container rowSpacing={2} columnSpacing={{ xs:1, sm:2, md:3 }}>
        <Grid item xs={12}>
          <AddAnimals />
          </Grid>
        <Grid item xs={12}>
          <MainCard title="Animals" content="List of Animals" />
            <AnimalList animals={ animals }/>
        </Grid>
      </Grid>

  )
}

export default Animals;