class Worker {
    constructor(workerData) {
        this.workerId = workerData.worker_id;
        this.firstName = workerData.first_name;
        this.lastName = workerData.last_name;
        this.email = workerData.email;
        // Make comment on GitHub request that password was added.
        this.password = workerData.password;
        this.phone = workerData.phone;
        this.specialization = workerData.specialization;
        this.type = workerData.type;
    }
}

module.exports = Worker;