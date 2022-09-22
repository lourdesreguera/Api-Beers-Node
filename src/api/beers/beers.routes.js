const express = require('express');
const { getAllBeers, getBeerById, getBeerByName, postBeer, putBeer, deleteBeer } = require('./beers.controller');

const router = express.Router();

router.get('/', getAllBeers);
router.get('/:id', getBeerById);
router.get('/name/:name', getBeerByName);
router.post('/new', postBeer);
router.put('/edit/:id', putBeer);
router.delete('/delete/:id', deleteBeer);

module.exports = router;
