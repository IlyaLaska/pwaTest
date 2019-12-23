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
    fastify.get('/index.html', (request, reply) => {
        fs.readFile('../public/index.html', (err, file) => {
            if(err) console.log(err);
            if(err) reply.status(404).send("AAError");
            else reply.headers({'Content-Type': 'text/html'}).status(200).send(file);
        });
    });
    fastify.get('/auth', (request, reply) => {
        reply.status(200).send("Auth page");
    });
    fastify.get('/db', db.getUsers);
    fastify.get('/manifest.json', (request, reply) => {
        fs.readFile('../public/manifest.json', (err, file) => {
            console.log(err);
            if(err) reply.status(404).send("WTFError");
            else reply.headers({'Content-Type': 'application/json'}).status(200).send(file);
        });
    });
    fastify.get('/sw.js', (request, reply) => {
        fs.readFile('../public/sw.js', (err, file) => {
            console.log(err);
            if(err) reply.status(404).send("WTFFFFError");
            else reply.headers({'Content-Type': 'text/javascript'}).status(200).send(file);
        });
    });
    fastify.get('/images/icons/icon-512x512.png', (request, reply) => {
        fs.readFile('../images/icons/icon-512x512.png', (err, file) => {
            console.log(err);
            if (err) reply.status(404).send("WTFFFFError");
            else reply.headers({'Content-Type': 'image/png'}).status(200).send(file);
        });
    });
    fastify.get('/images/icons/icon-256x256.png', (request, reply) => {
        fs.readFile('../images/icons/icon-256x256.png', (err, file) => {
            console.log(err);
            if (err) reply.status(404).send("WTFFFFError");
            else reply.headers({'Content-Type': 'image/png'}).status(200).send(file);
        });
    });
    fastify.get('/images/icons/icon-144x144.png', (request, reply) => {
        fs.readFile('../images/icons/icon-144x144.png', (err, file) => {
            console.log(err);
            if (err) reply.status(404).send("WTFFFFError");
            else reply.headers({'Content-Type': 'image/png'}).status(200).send(file);
        });
    });
    fastify.get('/images/icons/icon-128x128.png', (request, reply) => {
        fs.readFile('../images/icons/icon-128x128.png', (err, file) => {
            console.log(err);
            if (err) reply.status(404).send("WTFFFFError");
            else reply.headers({'Content-Type': 'image/png'}).status(200).send(file);
        });
    });
    fastify.get('/offline.html', (request, reply) => {
        fs.readFile('../public/offline.html', (err, file) => {
            console.log(err);
            if (err) reply.status(404).send("WTFFFFError");
            else reply.headers({'Content-Type': 'text/html'}).status(200).send(file);
        });
    });
    fastify.get('/favicon.ico', (request, reply) => {
        fs.readFile('../images/favicon.ico', (err, file) => {
            console.log(err);
            if (err) reply.status(404).send("WTFFFFError");
            else reply.headers({'Content-Type': 'image/x-icon'}).status(200).send(file);
        });
    });
}


module.exports = routes;
