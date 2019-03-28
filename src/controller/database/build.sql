BEGIN;
-- DROP TABLE IF EXISTS users, specalization,field,proposal,requirement CASCADE;
CREATE TABLE field(
    id SERIAL PRIMARY KEY,
    name VARCHAR(45) NOT NULL
);
CREATE TABLE specalization(
    id SERIAL PRIMARY KEY,
    name VARCHAR(45),
    field_id INT REFERENCES field(id)
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(18) NOT NULL,
    last_name VARCHAR(18),
    email VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL,
    freelancer_url VARCHAR NOT NULL,
    photo_url VARCHAR NOT NULL,
    birthday TIMESTAMP,
    no_mobile TEXT NOT NULL UNIQUE,
    specalization_id INT REFERENCES specalization(id),
    country VARCHAR(18)
);

CREATE TABLE proposal(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    description VARCHAR NOT NULL,
    user_id INT REFERENCES users(id),
    specalization_id INT REFERENCES specalization(id)
);
CREATE TABLE requirement(
    id SERIAL PRIMARY KEY,
    text VARCHAR NOT NULL,
    prop_id INT REFERENCES proposal(id)
);