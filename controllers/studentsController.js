const studentsdb = require('../models/students');

module.exports = {
  index(req, res, next) {
    return studentsdb
      .findAll().then((students) => {
        students.sort((studentA, studentB) => studentA.id - studentB.id);

        res.locals.students = students,

        next();
      })
      .catch(err => next(err));
  },
  createNewSkill(req, res, next) {
    const { skill } = req.body;
    const { id } = req.params;

    return studentsdb
      .update({ skill, id })
      .then(() => { next(); })
      .catch((err) => { next(err); });
  },
};
