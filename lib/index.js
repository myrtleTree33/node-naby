"use strict";

var _express = _interopRequireDefault(require("express"));

var _logger = require("./utils/logger");

var _botRoutes = _interopRequireDefault(require("./routes/botRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  PORT
} = process.env;
const app = (0, _express.default)(); // middleware

app.use(_logger.loggingMiddleware);
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/bot', _botRoutes.default);
app.listen(PORT, () => _logger.logger.info(`Example app listening on port ${PORT}!`));