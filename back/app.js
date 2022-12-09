const express = require('express');
const app = express();
// const port = 3000;

// express.json();

app.get('/', (req, res, next) => {
  res.send('accueil!');
});

// app.get('/api', (req, res, next) => {
//   res.json({message: 'api!'});
// });

app.get('/api/sauces', (req, res, next) => {
  res.send('api sauces!');
});

// zmvmzqmf6hqrmwh4q7szk7

app.get('/api/opc', (req, res, next) => {
  const stuff = [
    {
      _id: 'oeihfzeoi',
      title: 'Mon premier objet',
      description: 'Les infos de mon premier objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 2900,
      userId: 'qsomihvqios',
    },
  ];
  res.status(200).json(stuff);
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// });

module.exports = app;