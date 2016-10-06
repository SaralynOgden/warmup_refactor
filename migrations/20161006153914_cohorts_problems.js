'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('cohorts_problems', (t) => {
    t.increments().primary();
    t.integer('cohort_id').unsigned().references('id').inTable('cohorts');
    t.integer('problem_id').unsigned().references('id').inTable('problems');
    t.dateTime('scheduled_date').notNullable();
    t.dateTime('scheduled_announcement').notNullable();
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cohorts_problems');
};
