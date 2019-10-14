const express = require('express');

const catsRouter = express.Router();
const cats = require('../stores/cats-store');
const Queue = require('../queue');

catsRouter
  .route('/')
  .get((req, res, next) => {

    res.status(200).json(Queue.getAll(cats));
        
  });




module.exports = catsRouter;