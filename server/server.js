import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 5000;

app.get('/', (req, res) =>{
    console.log("Get request");

});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);

});

