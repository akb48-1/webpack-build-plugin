"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _request = _interopRequireDefault(require("./request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConcatSource = require("webpack-sources").ConcatSource;

var pluginName = 'BuildWebpackPlugin';

function MyWebpackPlugin() {}

MyWebpackPlugin.prototype.apply = function (compiler) {
  compiler.hooks.emit.tapAsync(pluginName, async function (compilation, callback) {
    var data = await (0, _request.default)();
    var message = unescape(data[require('../package.json').version].join(''));
    compilation.chunks.forEach(function (chunk, index) {
      chunk.files.forEach(async function (filename, index2) {
        compilation.assets[filename] = new ConcatSource('\/**Sweet Banner**\/', '\n', '/**' + message + '**\/', '\n', compilation.assets[filename]);
      });
    });
    callback();
  });
};

var _default = MyWebpackPlugin;
exports.default = _default;