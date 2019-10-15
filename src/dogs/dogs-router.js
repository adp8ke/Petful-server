const express = require('express');

const dogsRouter = express.Router();
const dogs = require('../stores/dogs-store');
const Queue = require('../queue');
const adopted = require('../stores/adopted-store')

dogsRouter
  .route('/')
  .get((req, res, next) => {

    res.status(200).json(Queue.getAll(dogs));
        
  })

  .delete((req, res, next) => {
    
    adopted.enqueue(dogs.dequeue());
    return res.status(204).end();
  });


module.exports = dogsRouter;