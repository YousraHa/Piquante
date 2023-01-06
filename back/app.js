const express = require('express');
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
const path = require('path');

const sauceRoute = require('./routes/sauce');
const userRoute = require('./routes/user');
const User = require('./models/user');
const Sauce = require('./models/sauce');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://opcpiquante:Lbch6R87WhoqAQdO@cluster0.au1uftb.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', sauceRoute);
// app.use('/api/user', userRoute);
app.use('/api/auth', userRoute);


module.exports = app;