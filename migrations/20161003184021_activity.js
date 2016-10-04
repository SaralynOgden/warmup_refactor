'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('activity', (table) => {
    table.increments();
    table.integer('student_id').notNullable();
    table.boolean('has_tried').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('activity');
};
