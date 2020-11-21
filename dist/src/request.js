"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetch = require('node-fetch');

function request() {
  return fetch(_config.default.url.join('/'), {
    headers: _config.default.headers
  }).then(function (res) {
    return res.json();
  });
}

var _default = request;
exports.default = _default;