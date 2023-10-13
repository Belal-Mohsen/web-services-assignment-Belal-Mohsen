import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GiftsCard from './Components/GiftsCard';
import PlantsCard from './Components/PlantsCard';

function App() {
  const [gifts, setGifts] = useState([]);
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const giftsResponse = await axios.get('http://localhost:5000/api/gifts');
        setGifts(giftsResponse.data);
        console.log(giftsResponse.data)

        const plantsResponse = await axios.get('http://localhost:5000/api/plants');
        setPlants(plantsResponse.data.data);

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Gifts</h1>
          <div className='flex flex-col md:flex-row flex-wrap justify-center items-center'>
            {gifts.slice(0, 7).map((gift, index) => (
              <div key={index} className="">
                <GiftsCard gift={gift} />
              </div>
            ))}
          </div>

          <h1>Plants</h1>
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center">
            {plants.slice(0, 7).map((plant, index) => (
              <div key={index}>
                <PlantsCard plant={plant} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
