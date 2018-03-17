const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cards.controller');
const secureMiddleware = require('../middleware/secure.middleware');

router.get('/', cardsController.index);
router.get('/:id', cardsController.show);
router.post('/', cardsController.create);
router.put('/:id',  cardsController.update);
router.delete('/:id', cardsController.destroy);

module.exports = router;
//secureMiddleware.isAuthenticated
