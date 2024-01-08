const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/store', async function (req, res, next) {
	const user = await User.create(req.body);
	res.send(user);
});

router.get('/get', async function (req, res) {
	const userData = await User.find({});
	console.log("user get");
	res.setHeader('Success', 'text/html');
	res.send(userData);
});

module.exports = router;

// router.post('/', async (req, res) => {
// 	try {
// 		const { name, password } = req.body;
// 		if (name === 'admin' && password === 'admin') {
// 			return res.status(200).json('Welcome to the admin page');
// 		}

// 		if (!(name && password)) {
// 			return res.status(200).json("Please enter a name and password");
// 		}

// 		const checkUser = await User.findOne({name, password});
// 		if (checkUser) {
// 			return re.status(409).json({
// 				message: 'User already exists'
// 			});
// 		}

// 		const user = new User({name, password});
// 		await user.save();

// 		return res.status(201).json({
// 			message: 'User created successfully',
// 			user
// 		});
// 	} catch (error) {
// 		console.log(error);
// 		return res.status(500).json({
// 			message: 'Internal Server error'
// 		});
// 	}
// });