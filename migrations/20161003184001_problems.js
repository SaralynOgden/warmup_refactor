'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('problems', (table) => {
    table.increments();
    table.string('type').notNullable();
    table.string('heading').notNullable();
    table.text('description').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('problems');
};
