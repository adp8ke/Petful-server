const express = require('express');

const dogsRouter = express.Router();
const dogs = require('../stores/dogs-store');
const Queue = require('../queue');

dogsRouter
  .route('/')
  .get((req, res, next) => {

    res.status(200).json(Queue.getAll(dogs));
        
  });




module.exports = dogsRouter;