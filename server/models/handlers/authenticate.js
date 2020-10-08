const _ = require('lodash');

const studentModel = require('../db/student');
const workerModel = require('../db/worker');

/**
 * Checks to see if the email and password is valid for the system.
 * @param {string} email 
 * @param {string} password 
 * @return {boolean} true if credentials are correct, false otherwise
 */
async function isUserCredentialsValid(email, password) {
    // Searches the student and social worker to see if the user credentials are valid.
    const studentPromise = studentModel.findStudent(email, password);
    const workerPromise = workerModel.findWorker(email, password);

    // Separated the student and worker table as business logic forbides overlap between the two.
    // No general user table as not needed (since no overlap) and will save database storage space. 
    const [student, worker] = await Promise.all([studentPromise, workerPromise]);
    
    if (_.isNil(student) && _.isNil(worker)) return false;

    // QUESTION: Should we return the user type and data?
    return true;
}

module.exports = {
    isUserCredentialsValid,
}