const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
// App
const app = express();

// Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

module.exports = app;