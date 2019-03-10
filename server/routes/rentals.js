const express = require('express');
const router = express.Router();
const rental = require('../models/rental');

router.get('', (req, res) => {
    rental.find({},(err, foundRentals) => {
        res.json(foundRentals);
    })
})

router.get('/:id', (req, res) => {
    var rentalId = req.params.id;

    rental.findById(rentalId, (err, foundRental) => {
        if(err) {
            res.status(422).send({'title' : "Rental not found"});
        }
        res.json(foundRental);
    })
})

module.exports = router;