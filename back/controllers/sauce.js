const Sauce = require ('../models/sauce');

exports.getAllSauces = (req, res, next) => {
    Sauce.find()
      .then(sauces => res.status(200).json(sauces))
      .catch(error => res.status(400).json({ error }));
};

exports.getOneSauce = (req, res, next) => {
  console.log(req.params.id, 'reqbody')
  Sauce.findOne({_id: req.params.id})
    .then(sauce => res.status(200).json(sauce))
    .catch(error => res.status(400).json({ error }));
};

exports.createSauce = (req, res, next) => {
  console.log('test...');
  console.log(req.body, 'req.body');
  const sauceObject = JSON.parse(req.body.sauce)
    const sauce = new Sauce({
      ...sauceObject,
      userId: req.auth.userId,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
      likes:  0,
      dislikes:  0,
      usersLiked: [],
      usersDisliked: [],
    });
    console.log(sauce);
    sauce.save()
      .then( () => {res.status(201).json({ message: 'Sauce saved successfully!'});})
      .catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
};