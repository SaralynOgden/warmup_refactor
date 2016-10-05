'use strict';

const express = require('express');
const app = express();

app.disable('x-powered-by');

const bodyParser = require('body-parser');
const morgan = require('morgan');

switch (app.get('env')) {
  case 'development':
    app.use(morgan('dev'));
    break;

  case 'production':
    app.use(morgan('short'));
    break;

  default:
}

app.use(bodyParser.json());

// const students = require('./routes/students');
// const instructors = require('./routes/instructors');
// const problems = require('./routes/problems');
// const solutions = require('./routes/solutions');
// const errors = require('./routes/errors');
// const activities = require('./routes/activities');
// const programs = require('./routes/programs');
// const problems_students = require('./routes/problems_students');
// const instructors_programs = require('./routes/instructors_programs');

// app.use(students);
// app.use(instructors);
// app.use(problems);
// app.use(solutions);
// app.use(errors);
// app.use(activities);
// app.use(programs);
// app.use(problems_students);
// app.use(instructors_programs);

app.use((_req, res) => {
  res.sendStatus(404);
});

app.use((err, _req, res, _next) => {
  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  console.error(err.stack);
  res.sendStatus(500);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Listening on port', port);
});
