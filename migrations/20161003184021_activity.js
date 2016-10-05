'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('activities', (table) => {
    table.increments();
    table.foreign('student_id').notNullable().references('students.id');
    table.boolean('has_tried').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('activities');
};
