const connection = require('../database/connection.js');

const getProposal = (specId) => {
    const sqlObject = {
        text: 'SELECT proposal.id,proposal.title,proposal.description'
        +'users.first_name, users.last_name, users.photo_url'
        +'FROM proposal JOIN users ON proposal.user_id ,users.id '
        +'WHERE proposal.specalization_id = $1',
        valueText:[specId]
    }
  return  connection.query(sqlObject);
}
module.exports = getProposal;