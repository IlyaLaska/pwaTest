'use strict';

const port = 40000;
const address = '127.0.0.1';
const fs = require('fs');

const fastify = require('fastify')({
    logger: true,
    https: {
        key: fs.readFileSync('./key.pem'),
        cert: fs.readFileSync('./cert.pem')
    }
});

fastify.register(require('./routes.js'));

fastify.listen(port, address, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`server listening on ${address}`);
});