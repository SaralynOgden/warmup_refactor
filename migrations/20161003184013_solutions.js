'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('solutions', (table) => {
    table.increments();
    table.foreign('error_id');
    table.foreign('problem_id').notNullable().references('problems.id');
    table.text('attempts').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('solutions');
};
