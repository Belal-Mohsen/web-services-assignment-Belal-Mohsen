import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GiftsCard from './Components/GiftsCard';
import PlantsCard from './Components/PlantsCard';

function App() {
  const [gifts, setGifts] = useState([]);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios.get('/api/gifts').then((response) => {
      setGifts(response.data);
    });
    
    axios.get('/api/plants').then((response) => {
      setPlants(response.data);
    });
  }, []);


  return (
    <div className="text-3xl font-bold underline">
      <p>Hello</p>
    </div>
  );
}

export default App;
