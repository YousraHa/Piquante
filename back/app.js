const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://opcpiquante:GNMeLvQohXemmmho@cluster0.au1uftb.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.get('/', (req, res, next) => {
  res.send('accueil!');
});

app.get('/api/sauces', (req, res, next) => {
  res.send('api sauces GET!');
});

app.post('/api/sauces', (req, res, next) => {
  res.send('api sauces POST!');
});

app.get('/api/sauces/:id', (req, res, next) => {
  res.json({message: 'api ID get!'});
});

app.put('/api/sauces/:id', (req, res, next) => {
  res.json({message: 'api ID put!'});
});

app.delete('/api/sauces/:id', (req, res, next) => {
  res.json({message: 'sauce delete!'});
});

app.post('/api/sauces/:id/like', (req, res, next) => {
  res.json({message: 'id like!'});
});


// app.get('/api/opc', (req, res, next) => {
//   const stuff = [
//     {
//       _id: 'oeihfzeoi',
//       title: 'Mon premier objet',
//       description: 'Les infos de mon premier objet',
//       imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//       price: 4900,
//       userId: 'qsomihvqios',
//     },
//     {
//       _id: 'oeihfzeomoihi',
//       title: 'Mon deuxième objet',
//       description: 'Les infos de mon deuxième objet',
//       imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//       price: 2900,
//       userId: 'qsomihvqios',
//     },
//   ];
//   res.status(200).json(stuff);
// });

module.exports = app;