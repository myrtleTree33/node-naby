import express from 'express';
import { logger, loggingMiddleware } from './utils/logger';

const { PORT } = process.env;

const app = express();

// middleware
app.use(loggingMiddleware);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => logger.info(`Example app listening on port ${PORT}!`));
