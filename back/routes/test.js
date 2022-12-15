const express = require('express');

const router = express.Router();

const Thing = require('../models/sauce');

router.post('/', (req, res, next) => {
    const thing = new Thing({
      userId: req.body.userId,
      name:  req.body.name,
      manufacturer:  req.body.manufacturer,
      description:  req.body.description,
      mainPepper: req.body.mainPepper ,
      imageUrl:  req.body.imageUrl,
      heat:  req.body.heat,
      likes:  req.body.likes,
      dislikes:  req.body.dislikes,
      usersLiked: req.body.usersLiked,
      usersDisliked: req.body.usersDisliked,
    });
    thing.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });

module.exports = router;