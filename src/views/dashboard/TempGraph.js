import React, {useState, useEffect } from 'react';
import { Line } from react-chartjs-2;

const TempGraph = () => {
    const [data, setData] = useState({});

    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/temperature-stats')  
      .then(response => {
        const tempData = response.data.map(item => ({
            x: item.animal,
            y: item.temperature
        }));

        setData({
            datasets: [{
                label: 'Temperature',
                data: tempData,
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            }]
        });
      })
      .catch( error => {
        console.error('Error fetching data:', error)
      });
    }, []);
    
  return (
    <div>
        <Line data={data} />
    </div>
  )
}

export default TempGraph