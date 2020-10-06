const User = require('../data/User');

const { db } = require('../../lib/connection');

function findUser(id) {
    const data = await db.any("select * from user limit 1");

    return new User(data);
}

module.exports = {
    findUser,
}