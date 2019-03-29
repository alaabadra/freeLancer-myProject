const getSpecalization = (categoryId) => {
    const sqlObject = {
      text: 'select * from specialization where field_id = $1',
      valueText: [categoryId],
    };
    return connect.query(sqlObject);
  };
  module.exports = getSpecalization;