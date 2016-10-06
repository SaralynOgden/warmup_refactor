'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('problem_status', (t) => {
    t.increments().primary();
    t.integer('user_id').unsigned().references('id').inTable('users');
    t.integer('problem_id').unsigned().references('id').inTable('problems');
    t.enum('progress', ['UNATTEMPTED', 'STARTED', 'ATTEMPTED', 'SOLVED']).defaultTo('UNATTEMPTED');
    t.text('answer').defaultTo('');
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('problem_status');
};
