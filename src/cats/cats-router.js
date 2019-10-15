const express = require('express');

const catsRouter = express.Router();
const cats = require('../stores/cats-store');
const Queue = require('../queue');
const adopted = require('../stores/adopted-store')

catsRouter
  .route('/')
  .get((req, res, next) => {

    res.status(200).json(Queue.getAll(cats));
        
  })

  .delete((req, res, next) => {

    adopted.enqueue(cats.dequeue());

    return res.status(204).end();
    
  });




module.exports = catsRouter;