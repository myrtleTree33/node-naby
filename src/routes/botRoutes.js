import { Router } from 'express';

const routes = Router();

// please see sample from https://github.com/myrtleTree33/burpple-api-unofficial/blob/master/src/routes/baseRoutes.js

/**
 * GET home page
 */
routes.get('/', async (req, res) => {
  res.json({ message: 'Welcome to bot routes!' });
  return Promise.resolve();
});

export default routes;
