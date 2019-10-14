const express = require('express');

const usersRouter = express.Router();
const users = require('../stores/users-store');
const Queue = require('../queue');

usersRouter
  .route('/')
  .get((req, res, next) => {

    res.status(200).json(Queue.getAll(users));
        
  });




module.exports = usersRouter;