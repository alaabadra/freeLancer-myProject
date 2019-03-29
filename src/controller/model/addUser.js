const connection = require('../database/connection.js');
const addUser = (userInfo) => {
    const queryValues = Object.keys(userInfo).map(info =>userInfo(info));
    const sqlObject = {
        text:'INSERT INTO users (first_name,last_name,email,password,freelancer_url,photo_url,birthday,no_mobile,country) returning *',
        valueText :[...queryValues]
    }
   return connection.query(sqlObject);
}
module.exports = addUser;