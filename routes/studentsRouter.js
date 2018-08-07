const express = require('express');
// const { Converter }  = require('showdown');

const studentController = require('../controllers/studentsController');
const views = require('../controllers/resHandler');

const studentsRouter = express.Router();

studentsRouter.route('/')
  .get(studentController.index, views.showAll);

studentsRouter.route('/:id/edit')
  .post(studentController.createNewSkill, studentController.index, views.handleCreate);

studentsRouter.route('/:id/delete')
  .post(studentController.deleteSkill, studentController.index, views.handleCreate);

studentsRouter.route('/:id/new')
  .post(studentController.addNewSkill, studentController.index, views.handleCreate);

studentsRouter.route('/deleteempty')
  .get(studentController.deleteEmpty, views.handleCreate);

// studentRouter.route('/:id')
//     .get(controller.getOne, views.showOne, views.show404);


module.exports = studentsRouter;
