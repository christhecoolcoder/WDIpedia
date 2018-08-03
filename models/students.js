const db = require('../config/Connection');

function findAll() {
  return db.many(`
    SELECT *
    FROM skills RIGHT JOIN
    student ON student.id = skills.student_id
  `);
}

function update({ id, skill }) {
  return db.any(`
    UPDATE skills
    SET skill = $/skill/
    WHERE student_id = $/id/
    RETURNING *
  `, { id, skill });

  // `
  //     INSERT INTO quotes (content , author, creator_id)
  //     VALUES ($/content/, $/author/, $/creator_id/)
  //     RETURNING *
  //   `
}

module.exports = {
  findAll,
  update,
//   save,
//   destroy,
};
