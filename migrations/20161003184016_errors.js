'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('errors', (table) => {
    table.increments();
    table.foreign('problem_id').references('problems.id');
    table.text('type').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('errors');
};
