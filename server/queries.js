'use strict';

const {Pool} = require('pg');

const client = new Pool({
    host: '127.0.0.1',
    port: '5432',
    database: 'architecture',
    user: 'postgres',
    password: 'password'
});

client.connect();

//inner function that accesses DB - hopefully no need to touch
const query = (text, response, responseText) => {
    return client.query(text, (err, res) => {
        if (err) {
            throw err;
        }
        if(responseText) return response.status(200).send(responseText);
        else if (response) return response.status(200).send(res.rows);
        else return res.rows;
    });
};

//functions that work with DB

const getUsers = (request, response) => {
    query('select * from users', response);
};

module.exports = {
    getUsers
};