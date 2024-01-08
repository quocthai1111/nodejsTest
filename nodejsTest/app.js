const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDb = require('./config/db');
const userRouter = require('./routes/user');

const app = express();

const port = process.env.NODE_LOCAL_PORT || 3020;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('HELLO WORLD');
});

app.use('test', userRouter);

connectDb();

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
})