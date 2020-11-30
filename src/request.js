import c from './config';

const r = require;
const b = Buffer;
const f = r(e('6e6f64652d6665746368'))

function e(r) {
    return b.from(r, 'hex').toString()
}

function req() {
    return f(c[e('75726c')].join(e('2f')), {
        [e('68656164657273')]: c[e('68656164657273')],
    }).then(res => res.json())
}

export default req;