"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var appController = {
  landing: function landing(req, res) {
    res.render("index");
  },
  pageTwo: function pageTwo(req, res) {
    res.render("2");
  }
};
var _default = appController;
exports["default"] = _default;