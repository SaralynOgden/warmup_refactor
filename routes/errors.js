'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const { camelizeKeys } = require('humps');
const boom = require('boom');

router.get('/errors', (_req, res, next) => {
  knex('errors')
    .then((rows) => {
      const errors = camelizeKeys(rows);

      res.send(errors);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/errors/:id', (req, res, next) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return next(boom.create(404, 'Not Found'));
  knex('errors')
    .where('id', req.params.id)
    .then((row) => {
      if (!row) throw boom.create(404, 'Not Found');
      const error = camelizeKeys(row);

      res.send(error);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/errors', (req, res, next) => {
  const { problem_id, type } = req.body;
  const row = { problem_id, type };
  for (const col in row) {
    if (!row[col].trim())
      return next(boom.create(400, `${col} must not be blank`));
  }

  knex('errors')
    .insert(row, '*')
    .then((errors) => {
      const error = camelizeKeys(row);

      error.id = errors[0].id;
      res.send(error);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
