const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const socketIO = require('socket.io');
const mongoAdapter = require('socket.io-adapter-mongo');
const { mongoConnectionString } = require('./config');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
// var server = http.createServer(app);
// const io = socketIO(server);
// io.adapter(mongoAdapter(`${mongoConnectionString.cluster}`));

// middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true, parameterLimit: 10000, limit: 1024 * 1024 * 50 }));

// routes
const usersRoutes = require('./routes/Users');
app.use('/users', usersRoutes);
const api = require('./routes/api');
app.use('/api', api);

// connection
mongoose.Promise = Promise;
mongoose.connect(
	`${mongoConnectionString.development}/portpolio?retryWrites=true&w=majority`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
		// useFindAndModify: false
	},
	err => (err ? console.log('Connection error', err) : console.log('connected'))
);
// api
const port = process.env.PORT || 3001;
app.use(express.static(path.join(__dirname, '/client')));
app.get('*', (req, res) => {
	req.sendFile(path.resolve(__dirname, '/client/build', 'index.html'));
});
app.listen(port, () => console.log('Express server is running at port', port));
