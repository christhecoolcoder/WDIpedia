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
    WHERE id = $/id/
    RETURNING *
  `, { id, skill });
}

function create({ id, skill }) {
  return db.none(`
    INSERT INTO skills (student_id, skill)
    VALUES ($1, $2)
  `, [id, skill]);
}

function deleteSkill(id) {
  return db.any(`
    DELETE FROM skills
    WHERE id = $1
  `, [id]);
}

function deleteEmpty() {
  return db.none(`
    DELETE FROM skills WHERE student_id = null
  `);
}

module.exports = {
  findAll,
  update,
  create,
  deleteSkill,
  deleteEmpty,
};
