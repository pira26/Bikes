const mongoose = require('mongoose');

const BikeSchema = new mongoose.Schema({
	name: String,
	image: {data: Buffer, contentType: String }, // ne fonctionne pas 
	description: String,
	loan: Number,
	location: String 
});

module.exports = mongoose.model('Bike', BikeSchema);