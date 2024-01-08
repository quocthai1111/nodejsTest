const mongoose = require('mongoose');
const { Schema } = mongoose.Schema;

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: false,
		},
		password: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('user', userSchema, 'users');