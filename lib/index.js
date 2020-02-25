"use strict";

var _express = _interopRequireDefault(require("express"));

var _logger = require("./utils/logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT;
var app = (0, _express["default"])(); // middleware

app.use(_logger.loggingMiddleware);
app.get('/', function (req, res) {
  return res.send('Hello World!');
});
app.listen(PORT, function () {
  return _logger.logger.info("Example app listening on port ".concat(PORT, "!"));
});