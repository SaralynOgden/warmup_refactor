'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('solutions', (table) => {
    table.increments();
    table.integer('problem_id').notNullable();
    table.text('attempts').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('solutions');
};
