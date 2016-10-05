'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const { camelizeKeys } = require('humps');
const boom = require('boom');

router.get('/students', (_req, res, next) => {
  knex('students')
    .orderBy('last_name')
    .then((rows) => {
      const students = camelizeKeys(rows);

      res.send(students);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/students/:id', (req, res, next) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return next(boom.create(404, 'Not Found'));
  knex('students')
    .where('id', req.params.id)
    .then((row) => {
      if (!row) throw boom.create(404, 'Not Found');
      const student = camelizeKeys(row);

      res.send(student);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/students', (req, res, next) => {
  const {first_name, last_name, github_username, hashed_password, program_id}
          = req.body;
  const row = { first_name, last_name, github_username,
                hashed_password, program_id };
  for (const col in row) {
    if (!row[col].trim())
      return next(boom.create(400, `${col} must not be blank`));
  }

  knex('students')
    .insert(row, '*')
    .then((students) => {
      const student = camelizeKeys(row);

      student.id = students[0].id;
      res.send(student);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/students/:id', (req, res, next) => {
  const {first_name, last_name, github_username, hashed_password, program_id}
          = req.body;
  const studentUpdate = { first_name, last_name, github_username,
                hashed_password, program_id };
  const id = Number(req.params.id);

  if (isNaN(Number(id))) return next(boom.create(404, 'Not Found'));
  knex('students')
    .where('id', id)
    .then((student) => {
      if (!student) throw boom.create(404, 'Not Found');

      return knex('students')
        .update(studentUpdate, '*')
        .where('id', id);
    })
    .then((students) => {
      res.send(knex('students').where('id', id));
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/students/:id', (req, res, next) => {
  let student;
  const id = Number(req.params.id);

  if (isNaN(id)) return next(boom.create(404, 'Not Found'));
  knex('students')
    .where('id', id)
    .then((row) => {
      if (!row) throw boom.create(404, 'Not Found');

      student = row;

      return knex('students')
        .del()
        .where('id', id);
    })
    .then(() => {
      delete student.id;
      convertToCamelCase(student);
      res.send(student);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
