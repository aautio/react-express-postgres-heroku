CREATE TABLE Service_Worker (
    worker_id INT NOT NULL,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    email VARCHAR(320) NOT NULL,
    password VARCHAR(40) NOT NULL,
    phone VARCHAR(20),
    specialization VARCHAR(60),
    type VARCHAR(60),

    PRIMARY KEY (worker_id)
);