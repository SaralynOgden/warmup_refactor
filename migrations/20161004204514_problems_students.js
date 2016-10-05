'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('problems_students', (table) => {
    table.increments();
    table.foreign('problem_id').notNullable().references('problems.id');
    table.integer('student_id').notNullable().references('students.id');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('problems_students');
};
