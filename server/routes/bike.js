const express = require('express');
const router = new express.Router();

const Bike = require('../models/bike');

router.get('/', (req, res, next) => {
	Bike.find((err, bikes) => {
		if(err) {
			res.send(err);
		}
		res.send(bikes);
	})
});

router.post('/', (req, res, next) => {
	const bike = new Bike();
	bike.name = req.body.name;
	bike.image = req.body.image;
	bike.description = req.body.description;
	bike.loan = req.body.loan;
	bike.location = req.body.location;
	bike.save((err) => {
		if(err) {
			res.send(err);
		}
		res.send({mesage: 'OK'});
	});
});

router.get('/:bike_id', (req, res, next) => {
		Bike.findOne({_id: req.params.bike_id}, (err, bike) => {
			if(err) res.send(err);
			res.json(bike);
		});
	});

router.put('/:bike_id', (req, res) => {
		Bike.findOne({_id: req.params.bike_id}, (err, bike) => {
			if(err) res.send(err);

			if(req.body.name) bike.name = req.body.name;
			if(req.body.description) bike.description = req.body.description;
			if(req.body.location) bike.location = req.body.location;
			if(req.body.image) bike.image = req.body.image;

			bike.save((err) => {
				if(err) res.send(err);

				res.json({message:'DONE'}); 
			});
		});
	});

router.delete('/:bike_id', (req, res, next) => {
		Bike.remove({
			_id:req.params.bike_id
		}, (err, user) => {
			if(err) return res.send(err);
			res.json({message:"DELETED"});
		});
	});

module.exports = router;