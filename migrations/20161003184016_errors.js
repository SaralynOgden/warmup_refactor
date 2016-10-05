'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('errors', (table) => {
    table.increments();
    table.foreign('solution_id').notNullable().references('solutions.id');
    table.text('type').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('errors');
};
