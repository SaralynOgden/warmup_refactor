'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('cohorts_users', (t) => {
    t.increments();
    t.integer('cohort_id').unsigned().references('id').inTable('cohorts');
    t.integer('user_id').unsigned().references('id').inTable('users');
    t.enum('progress', ['UNATTEMPTED', 'STARTED', 'ATTEMPTED', 'SOLVED']).defaultTo('UNATTEMPTED');
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cohorts_users');
};
