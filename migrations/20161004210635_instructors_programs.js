'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('instructors_programs', (table) => {
    table.increments();
    table.foreign('instructor_id').notNullable().references('instructors.id');
    table.integer('program_id').notNullable().references('programs.id');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('instructors_programs');
};
