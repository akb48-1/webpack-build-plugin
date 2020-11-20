const fetch = require('node-fetch')
import config from './config';

function request() {
    return fetch(config.url.join('/'), {
        headers: config.headers,
    }).then(res => res.json())
}

export default request;