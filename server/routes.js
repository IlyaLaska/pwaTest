'use strict';

const fs = require('fs');

const db = require('./queries.js');

const authRedir = {
    schema: {
        response: {
            302: {
                type: 'object',
                properties: {
                    Location : { type: 'string' }
                }
            }
        }
    }
};

async function routes (fastify, options) {
    fastify.get('/', authRedir, (request, reply) => {
        reply.redirect('/auth');
    });
    fastify.get('/pwa', (request, reply) => {
        fs.readFile('../public/index.html', (err, file) => {
            console.log(err);
            if(err) reply.status(404).send("Error");
            else reply.status(200).send(file);
        });
    });
    fastify.get('/auth', (request, reply) => {
        reply.status(200).send("Auth page");
    });
    fastify.get('/db', db.getUsers);
}

module.exports = routes;
