const getRequirement = (proposalId) => {
    const sqlObject={
        text: 'select * from requirement where prop_id = $1',
        valueText: [proposalId]
    }
    return connect.query(sqlObject);
  };
  module.exports = getRequirement;