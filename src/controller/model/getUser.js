const connection = require('../database/connection.js');

const getUser = (userName) => {
    const sqlObject = {
        text: `SELECT * FROM users WHERE user_name=$1`,
        valueText =[userName]
    }
  return  connection.query(sqlObject);
}
module.exports = getUser;