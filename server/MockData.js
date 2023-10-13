import dotenv from 'dotenv';
dotenv.config();
const Server = process.env.Server;
const PORT = process.env.PORT;
const mockGifts = [
    {
      id: 1,
      name: 'Fancy Watch',
      price: 99.99,
      description: 'A stylish and elegant wristwatch.',
      image: `${Server}:${PORT}/images/watch.jpg`,
    },
    {
      id: 2,
      name: 'Gift Basket',
      price: 49.99,
      description: 'A curated gift basket with assorted goodies.',
      image: `${Server}:${PORT}/images/gift-basket.jpg`,
    },
    {
      id: 3,
      name: 'Scented Candles',
      price: 19.99,
      description: 'Set of scented candles in various fragrances.',
      image: `${Server}:${PORT}/images/candles.jpg`,
    },
    {
      id: 4,
      name: 'Plant with Pot',
      price: 29.99,
      description: 'A potted plant to liven up your space.',
      image: `${Server}:${PORT}/images/potted-plants.jpg`,
    },
    {
      id: 5,
      name: 'Chocolates Box',
      price: 14.99,
      description: 'Delicious assorted chocolates in a decorative box.',
      image: `${Server}:${PORT}/images/chocolates.jpg`,
    },
    {
      id: 6,
      name: 'Personalized Mug',
      price: 9.99,
      description: 'A mug with a personalized message or image.',
      image: `${Server}:${PORT}/images/mug.jpg`,
    },
    {
      id: 7,
      name: 'Jewelry Set',
      price: 79.99,
      description: 'A set of elegant jewelry pieces.',
      image: `${Server}:${PORT}/images/jewelry.jpg`,
    },
    {
      id: 8,
      name: 'Board Game',
      price: 34.99,
      description: 'A fun board game for game night with friends and family.',
      image: `${Server}:${PORT}/images/board-game.jpg`,
    },
    {
      id: 9,
      name: 'Fragrance Gift Set',
      price: 59.99,
      description: 'A set of fragrances for personal grooming.',
      image: `${Server}:${PORT}/images/fragrance-set.jpg`,
    },
    {
      id: 10,
      name: 'Gourmet Cooking Class',
      price: 129.99,
      description: 'A cooking class with a professional chef.',
      image: `${Server}:${PORT}/images/cooking-class.jpg`,
    },
  ];
  
  export default mockGifts;
  