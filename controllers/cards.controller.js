const mongoose = require('mongoose');
const Card = require('../models/card.model');
const ApiError = require('../models/api-error.model');

module.exports.index = (req, res, next) => {
  Card.find()
  .then(cards =>  res.json(cards))
  .catch(error => next(error));
};

module.exports.show = (req, res, next) => {
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
  .catch(error => next(error));
};

module.exports.update = (req, res, next) => {
};

module.exports.destroy = (req, res, next) => {
};
