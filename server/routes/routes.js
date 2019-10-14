const express = require('express');

const appController = require('../controllers/appController');

const api = express.Router();

api.get("/", appController.landing);

api.get("/2", appController.pageTwo);

module.exports = api;
