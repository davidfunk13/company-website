"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _appController = _interopRequireDefault(require("../controllers/appController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var api = _express["default"].Router();

api.get("/", _appController["default"].landing);
api.get("/2", _appController["default"].pageTwo);
var _default = api;
exports["default"] = _default;