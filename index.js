const express = require('express');

const app = express();
const TokenRoute = require('./routes/token');
const cors = require('cors');

app.listen(5000, () => {
  console.log('Server is running nicely');
});

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('Mpesa programming in progress, Time to get paid');
});

app.use('/token', TokenRoute);
