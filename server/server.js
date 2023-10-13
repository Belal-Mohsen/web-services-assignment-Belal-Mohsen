import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';
import mockGifts from './MockData.js';


dotenv.config();

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use('/images', express.static('public'));
const PORT = 5000;
const APIKey = process.env.PlantAPIKey;


app.get('/api/gifts', (req, res) => {
    console.log(mockGifts);
    res.json(mockGifts);
  });

  app.get('/api/plants', async (req, res) => {
    try {
      const response = await axios.get(`https://perenual.com/api/species-list?key=${APIKey}`);
    const plants = response.data;
    res.json(plants);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch plant data' });
    }
  }); 

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);

});

