import express from 'express';
import appController from '../controllers/appController';

const api = express.Router();

api.get("/", appController.landing);
api.get("/2", appController.pageTwo);

export default api;
