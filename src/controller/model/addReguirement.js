const addRequirment = (text, proposalId) => {
    const sql = {
      text: 'insert into requirement  (text , prop_id ) values ($1,$2) RETURNING *',
      values: [text, proposalId],
    };
    return connection.query(sql);
  };
  