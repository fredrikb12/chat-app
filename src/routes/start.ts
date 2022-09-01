import { IMiddleware } from '../types/middleware';
import express, { Response } from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next): Response {
  return res.send('<h1>Hello</h1>');
});

export { router };
