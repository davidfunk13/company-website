"use strict";

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes/routes"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 3001;
app.use(_express["default"]["static"]("public"));
app.engine("handlebars", (0, _expressHandlebars["default"])({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");
app.set("views", _path["default"].join(__dirname + "/views"));
app.use(_routes["default"]);
app.listen(PORT, function (err) {
  if (!err) {
    return console.log("Express listening on port ".concat(PORT));
  }

  return console.log(err);
});