import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import GiftsCard from './Components/GiftsCard';
import PlantsCard from './Components/PlantsCard';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Spinner from './Components/Spinner';
import CartPage from './Components/CartPage';

function App() {
  const [gifts, setGifts] = useState([]);
  const [plants, setPlants] = useState([]);
  // Cart
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  //////////////////////////////////////////////
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const giftsResponse = await axios.get('http://localhost:5000/api/gifts');
        setGifts(giftsResponse.data);

        const plantsResponse = await axios.get('http://localhost:5000/api/plants');
        setPlants(plantsResponse.data.data);

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Cart
  const addToCart = (item) => {
    setCart([...cart, item]);
    setTotalCost(totalCost + item.price);
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem !== item);
    setCart(updatedCart);
    setTotalCost(totalCost - item.price);
  };

  const clearCart = () => {
    setCart([]);
  };

  const checkout = () => {
    {/* will be added later*/}
  };
  ///////////////////////////////////
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavBar cart={cart} />
        <Routes>
          <Route
            path="/cart"
            element={<CartPage cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} checkout={checkout} />}
          />
          <Route
            path="/"
            element={
              isLoading ? (
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
                        <GiftsCard gift={gift} onAddToCart={addToCart} />
                      </div>
                    ))}
                  </div>
                  <div className="p-5 font-semibold">
                    <h1>Our Plants Section</h1>
                  </div>
                  <div className="flex flex-col md:flex-row flex-wrap justify-center items-center">
                    {plants.slice(0, 7).map((plant, index) => (
                      <div key={index} className="transform hover:scale-105 transition-transform ease-in-out duration-300">
                        <PlantsCard plant={plant} onAddToCart={addToCart} />
                      </div>
                    ))}
                  </div>
                </>
              )
            }
          />
        </Routes>
        <Footer className="fixed bottom-0 w-full" />
      </div>
    </Router>
  );
}

export default App;
