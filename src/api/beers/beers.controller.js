const Beer = require('./beers.model');

const getAllBeers = async (req, res, next) => {
    try {
        const allBeers = await Beer.find();
        return res.status(200).json(allBeers);
    } catch (error) {
        return next(error);
    }
};

const getBeerById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const beer = await Beer.findById(id);
        if (beer) {
            return res.status(200).json(beer);
        } else {
            return res.status(404).json('Beer not found with this id');
        }
    } catch (error) {
        return next(error);
    }
};

const getBeerByName = async (req, res, next) => {
    try {
        const { name } = req.params;
        const beer = await Beer.find({name: name});
        if (beer.length) {
            return res.status(200).json(beer);
        } else {
            return res.status(404).json('Beer not found with this name');
        }
    } catch (error) {
        return next(error);
    }
};

const postBeer = async (req, res, next) => {
    try {
        const newBeer = new Beer(req.body);
        const createdBeer = await newBeer.save();
        return res.status(201).json(createdBeer);
    } catch (error) {
        return next(error);
    }
};

const putBeer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const beer = new Beer(req.body);
        beer._id = id; // cambiamos el id al nuevo objeto para actualizar el que genera por el suyo
        const updatedBeer = await Beer.findByIdAndUpdate(id, beer);
        return res.status(200).json(updatedBeer);
    } catch (error) {
       return next(error);
    }
};

const deleteBeer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteBeer = await Beer.findByIdAndDelete(id);
        return res.status(200).json(deleteBeer);
    } catch (error) {
        return next(error);
    }
};

module.exports = { getAllBeers, getBeerById, getBeerByName, postBeer, putBeer, deleteBeer }