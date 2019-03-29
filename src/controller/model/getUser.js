const connection = require('../database/connection.js');

const getUser = (email) => {
    const sqlObject = {
        text: `SELECT * FROM users WHERE user_name=$1`,
        valueText :[email]
    }
  return  connection.query(sqlObject);
}
module.exports = getUser;