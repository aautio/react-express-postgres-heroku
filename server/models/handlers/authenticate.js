const userModel = require('../db/user');

function getUser(id) {
    return userModel.findUser(id);
}

module.exports = {
    getUser,
}