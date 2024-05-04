import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { Card,CardMedia, CardContent, CardActions, Button, Typography, Grid } from '@mui/material'
import { getAnimals } from 'api-service/api';

const AnimalList = (props) => {

  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      const animalsData = await getAnimals();
      setAnimals(animalsData);
      console.log(animalsData);
    };
    fetchAnimals();
  }, []);


  return (
    <Grid container rowSpacing={2} sx={{ margin: '20px'}} >
    {animals.map( (animal) => (
      <Grid item xs={12} sm={6} lg={4}>
        <Card sx={{ maxWidth: 345 }} key={animal.id} >
      <CardMedia
        sx={{ height: 140 }}
        // image="/assets/images/icons/SmartFARM_icon.png"
        title="Cow 1"
      />
      <CardContent>
        
          <Typography gutterBottom variant="h5" component="div">
            { animal.name }
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Breed: { animal.breed }
          </Typography>
          <Typography variant="body2" color="text.secondary">
           D.O.B: { animal.dob }
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Weight: { animal.weight } kgs
          </Typography>
          
      </CardContent>
      <CardActions>
        <Button size="small">View Details</Button>
        <Button size="small">Health History</Button>
      </CardActions>
    </Card>
   </Grid>
))}
    </Grid>
    )};

export default AnimalList;