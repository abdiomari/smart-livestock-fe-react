// api-service.js
import axios from 'axios';
const BASE_URL = 'http://127.0.0.1:8000/api'


export const getAnimals = async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/animals');
  return response.data;
};

export const addAnimal = (animal) => {
  return fetch( `${BASE_URL}/animals/ `, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(animal)
  })

  .then(response => response.json())
  .catch((error) => {
    console.error('Error:', error);
  });
  };


  export const getTemperatureStats = async () => {
    const response = await axios.get(`${BASE_URL}/temperature-stats`);
    return response.data;
  };

  export const getActiveSensors = async () => {
    const response = await axios.get(`${BASE_URL}/temperature-stats`);
    return response.data;
  };

