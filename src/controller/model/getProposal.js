const getProposal = (id) => {
    const sqlObject = {
    text:'select proposal.id, users.photo_url , users.firstname , users.lastname,'
    + 'specialization.name ,proposal.title,users.email, users.mobile_number, proposal.description '
    + 'from proposal join users ON users.id = proposal.user_id join specialization ON '
    + 'specialization.id = users.specalization_id  where proposal.id =$1',
     valueText:[id]
    }
    return connect.query(sqlObject);
  };
  module.exports = getProposal;