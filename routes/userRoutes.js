import express from 'express';
import { login, register } from '../controller/usercontroller.js';

const routes = express.Router();

routes.route("/register").post(register);
routes.route("/login").post(login);


export default routes;

