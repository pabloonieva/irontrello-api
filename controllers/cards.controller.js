const mongoose = require('mongoose');
const Card = require('../models/card.model');
const ApiError = require('../models/api-error.model');

module.exports.index = (req, res, next) => {
  Card.find()
  .then(cards =>  res.json(cards))
  .catch(error => next(new ApiError(error.message, 503)));
};

module.exports.show = (req, res, next) => {
  const cardId = req.params.id;

  Card.findById(cardId)
    .then(card => res.json(card))
    .catch(error => next(new ApiError(error.message, 404)));
};

module.exports.create = (req, res, next) => {
  const {title, description, due_date}  = req.body;
  const data = {
    title: title ? title : 'Sin título',
    description: description ? description : 'Sin description',
    due_date: due_date ? due_date : 'no date'
  };
  const newCard = new Card(data);
  newCard.save()
  .then(card => res.status(201).json(card))
  .catch(error => next(new ApiError(error.message, 503)));
};

module.exports.update = (req, res, next) => {
  const id = req.params.id;

  Card.findByIdAndUpdate(id, { $set: req.body }, { new: true })
   .then(card => {
     if (card) {
       res.status(200).json(card);
     } else {
       next(new ApiError(`Card not found`, 404));
     }
   }).catch(error => next(error));
 };

module.exports.destroy = (req, res, next) => {
   const cardId = req.params.id;

   Card.findByIdAndRemove(cardId)
   .then(card => res.status(204).json())
   .catch(error => next(new ApiError(error.message, 404)));
};
