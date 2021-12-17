'use strict';
const express = require('express');
const app = express();

const passport = require('passport');
const { JWTStrategy } = require('@sap/xssec');
const xsenv = require('@sap/xsenv');

// XSUAA Middleware
passport.use(new JWTStrategy(xsenv.getServices({uaa:{tag:'xsuaa'}}).uaa));

app.use(passport.initialize());
app.use(passport.authenticate('JWT', { session: false }));

const booksData = require('./books.json');

function checkReadScope(req, res, next) {
	if (req.authInfo.checkLocalScope('read')) {
		return next();
	} else {
    	console.log('Missing the expected scope');
    	res.status(403).end('Forbidden');
	}
}

app.get('/', function (req, res) {
  res.send('Server is running!');
});

app.get('/api/books', checkReadScope, function (req, res) {
  console.log('SUCCESS: GET /api/books'); 
  res.status(200).json(booksData);
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('App is using Node.js version: ' + process.version);
  console.log('App listening on port ' + port);
});