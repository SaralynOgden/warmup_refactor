'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('problem_status', (t) => {
    t.increments();
    t.foreign('cohort_id').references(cohorts.id);
    t.foreign('user_id').references(users.id);
    t.enum('progress', ['UNATTEMPTED', 'STARTED', 'ATTEMPTED', 'SOLVED']).defaultTo('UNATTEMPTED');
    t.specificType('hashed_password').notNullable();
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('problem_status');
};
