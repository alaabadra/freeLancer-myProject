const connection = require('../database/connection.js');
const getProposal = (id) => {
  const sqlObject ={
    text:`
    SELECT proposal.title,proposal.description, users.first_name, users.last_name, users.email, users.freelancer_url, users.no_mobile, 
    specalization.name FROM  proposal INNER JOIN users ON users.id = proposal.user_id 
    INNER JOIN specialization ON specialization.id =  proposal.specalization_id WHERE proposal.id = $1 `,
    valueText = [id]
  }
    return connection.query(sqlObject);
  };
  module.exports = getProposal;
