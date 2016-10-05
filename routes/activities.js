'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const { camelizeKeys } = require('humps');
const boom = require('boom');

router.get('/activities', (_req, res, next) => {
  knex('activities')
    .orderBy('student_id')
    .then((rows) => {
      const activities = camelizeKeys(rows);

      res.send(activities);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/activities/:id', (req, res, next) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return next(boom.create(404, 'Not Found'));
  knex('activities')
    .where('id', req.params.id)
    .then((row) => {
      if (!row) throw boom.create(404, 'Not Found');
      const activitie = camelizeKeys(row);

      res.send(activitie);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/activities', (req, res, next) => {
  const {first_name, last_name, github_username, hashed_password, program_id}
          = req.body;
  const row = { first_name, last_name, github_username,
                hashed_password, program_id };
  for (const col in row) {
    if (!row[col].trim())
      return next(boom.create(400, `${col} must not be blank`));
  }

  knex('activities')
    .insert(row, '*')
    .then((activities) => {
      const activitie = camelizeKeys(row);

      activitie.id = activities[0].id;
      res.send(activitie);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/activities/:id', (req, res, next) => {
  const {first_name, last_name, github_username, hashed_password, program_id}
          = req.body;
  const activitieUpdate = { first_name, last_name, github_username,
                hashed_password, program_id };
  const id = Number(req.params.id);

  if (isNaN(Number(id))) return next(boom.create(404, 'Not Found'));
  knex('activities')
    .where('id', id)
    .then((activitie) => {
      if (!activitie) throw boom.create(404, 'Not Found');

      return knex('activities')
        .update(activitieUpdate, '*')
        .where('id', id);
    })
    .then((activities) => {
      res.send(knex('activities').where('id', id));
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/activities/:id', (req, res, next) => {
  let activitie;
  const id = Number(req.params.id);

  if (isNaN(id)) return next(boom.create(404, 'Not Found'));
  knex('activities')
    .where('id', id)
    .then((row) => {
      if (!row) throw boom.create(404, 'Not Found');

      activitie = row;

      return knex('activities')
        .del()
        .where('id', id);
    })
    .then(() => {
      delete activitie.id;
      convertToCamelCase(activitie);
      res.send(activitie);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
