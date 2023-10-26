import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GiftsCard from './Components/GiftsCard';
import PlantsCard from './Components/PlantsCard';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Spinner from './Components/Spinner';

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
    <div className="min-h-screen flex flex-col">
      <NavBar />
      {isLoading ? (
        <div className="flex-1 flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="p-5 font-semibold">
            <h1>Our Gifts Section:</h1>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center">
            {gifts.slice(0, 7).map((gift, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform ease-in-out duration-300">
                <GiftsCard gift={gift} />
              </div>
            ))}
          </div>
          <div className="p-5 font-semibold">
            <h1>Our Plants Section</h1>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center">
            {plants.slice(0, 7).map((plant, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform ease-in-out duration-300">
                <PlantsCard plant={plant} />
              </div>
            ))}
          </div>
        </>
      )}
      <Footer className="fixed bottom-0 w-full" />
    </div>
  );
}

export default App;
