const knex = require('knex');
const confinguration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? confinguration.test : confinguration.development;

const connection = knex(config);

module.exports = connection;