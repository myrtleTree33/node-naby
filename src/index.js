import express from 'express';
import { logger, loggingMiddleware } from './utils/logger';

import botRoutes from './routes/botRoutes';

const { PORT } = process.env;

const app = express();

// middleware
app.use(loggingMiddleware());

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/bot', botRoutes);

app.listen(PORT, () => logger.info(`Example app listening on port ${PORT}!`));
