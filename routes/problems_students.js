'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const { camelizeKeys } = require('humps');
const boom = require('boom');

router.get('/problems_students', (_req, res, next) => {
  knex('problems_students')
    .orderBy('student_id')
    .then((rows) => {
      const problems_students = camelizeKeys(rows);

      res.send(problems_students);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/problems_students/:id', (req, res, next) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return next(boom.create(404, 'Not Found'));
  knex('problems_students')
    .where('id', req.params.id)
    .then((row) => {
      if (!row) throw boom.create(404, 'Not Found');
      const problems_student = camelizeKeys(row);

      res.send(problems_student);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/problems_students', (req, res, next) => {
  const {first_name, last_name, github_username, hashed_password, program_id}
          = req.body;
  const row = { first_name, last_name, github_username,
                hashed_password, program_id };
  for (const col in row) {
    if (!row[col].trim())
      return next(boom.create(400, `${col} must not be blank`));
  }

  knex('problems_students')
    .insert(row, '*')
    .then((problems_students) => {
      const problems_student = camelizeKeys(row);

      problems_student.id = problems_students[0].id;
      res.send(problems_student);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/problems_students/:id', (req, res, next) => {
  const {first_name, last_name, github_username, hashed_password, program_id}
          = req.body;
  const problems_studentUpdate = { first_name, last_name, github_username,
                hashed_password, program_id };
  const id = Number(req.params.id);

  if (isNaN(Number(id))) return next(boom.create(404, 'Not Found'));
  knex('problems_students')
    .where('id', id)
    .then((problems_student) => {
      if (!problems_student) throw boom.create(404, 'Not Found');

      return knex('problems_students')
        .update(problems_studentUpdate, '*')
        .where('id', id);
    })
    .then((problems_students) => {
      res.send(knex('problems_students').where('id', id));
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
