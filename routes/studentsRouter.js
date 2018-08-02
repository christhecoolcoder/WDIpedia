const express = require('express');
// const { Converter }  = require('showdown');

const controller = require('../controllers/studentsController');
const views = require('../controllers/resHandler');

const studentsRouter = express.Router();

studentsRouter.route('/')
    .get(controller.index, views.showAll);
    // .post(controller.createNewSoda, views.handleCreate, views.show404);

// studentRouter.route('/new')
//     .get(views.handleCreate);

// studentRouter.route('/:id')
//     .get(controller.getOne, views.showOne, views.show404);
    


module.exports = studentsRouter;

/**
 * 2 Routes + Controller
 *  - /
 *  - /person/:id
 * 
 *  
 */


