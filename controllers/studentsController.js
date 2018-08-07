const studentsdb = require('../models/students');

module.exports = {
  index(req, res, next) {
    return studentsdb
      .findAll()
      .then((students) => {
        students.sort((studentA, studentB) => studentA.student_id - studentB.student_id);

        /* eslint-disable-next-line no-unused-expressions */
        res.locals.students = students;

        next();
      })
      .catch(err => next(err));
  },
  createNewSkill(req, res, next) {
    const { skill } = req.body;
    const { id } = req.params;

    console.log('SKILL UPDATED!', id);

    return studentsdb
      .update({ skill, id })
      .then(() => { next(); })
      .catch((err) => { next(err); });
  },
  addNewSkill(req, res, next) {
    const { skill } = req.body;
    const { id } = req.params;

    console.log('ADDED SKILL!');

    return studentsdb
      .create({ skill, id })
      .then(() => next())
      .catch((e) => { next(e); });

    // Extract skill from request body
    // Extract 'id' from url params
    // update DB based on that skill and params
    // tell the router to run the next function
  },
  deleteSkill(req, res, next) {
    const { id } = req.params;

    console.log('SOMETHING WAS DELETED!');

    return studentsdb
      .deleteSkill(id)
      .then(() => next())
      .catch((e) => { next(e); });
  },
  deleteEmpty(req, res, next) {
    return studentsdb.deleteEmpty().then(() => next()).catch((e) => { next(e); });
  },
};
