const db = require('./index')

const createUserTable = () => {
  const userCreateQuery = `CREATE TABLE IF NOT EXISTS users
  (id SERIAL PRIMARY KEY, 
  email VARCHAR(100) UNIQUE NOT NULL, 
  first_name VARCHAR(100),
  username VARCHAR(30),
  last_name VARCHAR(100), 
  password VARCHAR(100) NOT NULL,
  created_on DATE NOT NULL)`;

  db
    .query(userCreateQuery)
    .then((res) => {
      console.log(res);
      db.end();
    })
    .catch((err) => {
      console.log(err);
      db.end();
    });
};

/**
 * Create Buses Table
 */
const createBusTable = () => {
  const busCreateQuery = `CREATE TABLE IF NOT EXISTS post
    (id SERIAL PRIMARY KEY,
    number_plate VARCHAR(100) NOT NULL,
    manufacturer VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    year VARCHAR(10) NOT NULL,
    capacity integer NOT NULL,
    created_on DATE NOT NULL)`;

  db
    .query(busCreateQuery)
    .then((res) => {
      console.log(res);
      db.end();
    })
    .catch((err) => {
      console.log(err);
      db.end();
    });
};


/**
 * Drop User Table
 */
const dropUserTable = () => {
  const usersDropQuery = 'DROP TABLE IF EXISTS users';
  db
    .query(usersDropQuery)
    .then((res) => {
      console.log(res);
      db.end();
    })
    .catch((err) => {
      console.log(err);
      db.end();
    });
};


/**
 * Create All Tables
 */
const createAllTables = () => {
  createUserTable();
  createBusTable();
};

/**
 * Drop All Tables
 */
const dropAllTables = () => {
  dropUserTable();
  dropBusTable();
};

module.exports = {
  createAllTables,
  dropAllTables,
};

require('make-runnable');