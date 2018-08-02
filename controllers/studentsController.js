const studentsdb = require('../models/students');

module.exports = {
    index(req,res,next){
        studentsdb.findAll()
        .then((students) => {
            res.locals.students = students,
            next();
        })
        .catch(err => next(err));
    }
}