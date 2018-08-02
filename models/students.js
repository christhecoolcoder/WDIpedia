const db = require('../config/Connection');

function findAll() {
  return db.many(`
    SELECT *
    FROM students
  `);
}

findAll();

module.exports = {
  findAll,
//   findById,
//   save,
//   destroy,
};
