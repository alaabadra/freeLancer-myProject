const { Pool } = require('pg');
const url = require('url');
require('dotenv').config();

let DB_URL = process.env.DATABASE_URL;
// if (process.env.NODE_ENV === 'testdb' || process.env.NODE_ENV === 'test') {
//   DB_URL = process.env.HEROKU_POSTGRESQL_TEAL_URL;
// } else if (process.env.NODE_ENV === 'dev') {
//   DB_URL = process.env.DATABASE_LOCAL;
// }

const allMyInfo = url.parse(DB_URL);
console.log(allMyInfo)

const [user, password] = allMyInfo.auth.split(':');

const someMyInfo = {
  host: allMyInfo.hostname,
  port: allMyInfo.port,
  database: allMyInfo.pathname.split('/')[1],
  max: process.env.MAX_DB_CONNECTION || 2,
  user,
  password,
  ssl: process.env.hostname !== 'localhost',
  idleTimeoutMillis: 1000,
};
module.exports = new Pool(someMyInfo);