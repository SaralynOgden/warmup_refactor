'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('programs', (table) => {
    table.increments();
    table.string('start_date').notNullable().defaultTo('');
    table.string('end_date').notNullable().defaultTo('');
    table.string('number_of_students').notNullable().defaultTo('');
    table.string('type').notNullable().defaultTo('FS');
    table.string('lead_instructor').notNullable();
    table.integer('cohort_number').notNullable();
    table.string('location').notNullable().defaultTo('Seattle');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('programs');
};
