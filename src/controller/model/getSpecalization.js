const getSpecalization = (categoryId) => {
    const sqlObject = {
      text: 'select id, name from specialization where field_id = $1',
      values: [categoryId],
    };
    return connect.query(sqlObject);
  };
  module.exports = getSpecalization;