const config = require('../config/secrets.json');

const pgpOptions = {};

const pgp = require('pg-promise')(pgpOptions);
const monitor = require('pg-monitor');

monitor.attach(pgpOptions);

const connectionString = config["DATABASE_URL"];

const db = pgp(connectionString);

module.exports = { db, connectionString }