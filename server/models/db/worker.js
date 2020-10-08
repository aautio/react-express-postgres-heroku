const _ = require('lodash');

const Worker = require('../data/Worker');

const Tables = require('../../constants/tables.json');
const { db } = require('../../lib/connection');

async function findWorker(email, password) {
    // TO DO: Encrypt the password in the future to be more secure. Will need to wait until reset password is implemented.
    const data = await db.any(`select * from ${Tables.worker} where email='${email}' and password='${password}';`);
    
    if (_.isEmpty(data)) return null;
    return new Worker(data);
}

module.exports = {
    findWorker,
}