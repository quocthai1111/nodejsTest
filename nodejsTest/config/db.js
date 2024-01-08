const mongoose = require('mongoose');

const url = 'mongodb://mongo:27017';

const connectDb = async () => {
	mongoose.connect(url, {
		serverSelectionTimeoutMS: 5000
	}).then(
		() => console.log('Connect to MongoDb: ', url)
	);
};

module.exports = connectDb;