const express = require('express');
const tasksRouter = express.Router();
const tasksController = require('../controllers/tasksController')

tasksRouter.get('/tasks', tasksController.getTasks);
tasksRouter.put('/tasks', tasksController.editTask);
tasksRouter.post('/tasks', tasksController.createTask);
tasksRouter.delete('/tasks/:id', tasksController.deleteTask);

module.exports = tasksRouter;
