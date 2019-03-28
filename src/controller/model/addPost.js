const addPost = (title, description, userid, speccatizationId) => {
    const sqlObject = {
      text: 'insert into proposal (title , description,user_id, specalization_id) values ($1,$2, $3,$4) RETURNING *',
      values: [title, description, userid, speccatizationId],
    };
    return connection.query(sqlObject);
  };
  module.exports= addPost;
  