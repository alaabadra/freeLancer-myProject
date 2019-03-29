const connection = require('../database/connection.js');

const getProposals = (specId) => {
    const sqlObject = {
      text:`
      SELECT proposal.title,proposal.description, users.first_name, users.last_name, users.email, users.freelancer_url, users.no_mobile, 
      specalization.name FROM  proposal INNER JOIN users ON users.id = proposal.user_id 
      INNER JOIN specialization ON specialization.id =  proposal.specalization_id WHERE proposal.specalization_id = $1 `,
        valueText:[specId]
    }
  return  connection.query(sqlObject);
}
module.exports = getProposals;
