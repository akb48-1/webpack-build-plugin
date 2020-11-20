
const ConcatSource = require("webpack-sources").ConcatSource;
const pluginName = 'BuildWebpackPlugin';
import request from './request'

function MyWebpackPlugin () {}
MyWebpackPlugin.prototype.apply = function(compiler) {

    compiler.hooks.afterPlugins.tap(pluginName,async function (compiler) {
        console.log('afterPlugins')
    })

    compiler.hooks.compile.tap(pluginName, function (compilationParams) {
        console.log('compile')
    })

    compiler.hooks.compilation.tap(pluginName, function (compilation) {
        console.log('compilation')
    })

    compiler.hooks.afterEmit.tap(pluginName, function (compiler) {
        console.log('afterEmit')
    })

    compiler.hooks.done.tap(pluginName, function (status) {
        console.log('done')
    })

    compiler.hooks.emit.tapAsync(pluginName, async function (compilation, callback) {
        console.log('emit')

        let data = await request()
        let message = unescape(data['1.0.1'].join(''));

        compilation.chunks.forEach(function (chunk, index) {
            chunk.files.forEach(async function (filename, index2) {
                compilation.assets[filename] = new ConcatSource(
                    '\/**Sweet Banner**\/',
                    '\n',
                    '/**' + message + '**\/',
                    '\n',
                    compilation.assets[filename]
                );
            });
        });
        
        callback()
    })

}

export default MyWebpackPlugin