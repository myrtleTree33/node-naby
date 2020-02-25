"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT;
var app = (0, _express["default"])();
app.get('/', function (req, res) {
  return res.send('Hello World!');
});
app.listen(PORT, function () {
  return console.log("Example app listening on port ".concat(PORT, "!"));
});