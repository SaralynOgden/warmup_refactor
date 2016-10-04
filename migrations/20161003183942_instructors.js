'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('instructors', (table) => {
    table.increments();
    table.string('first_name').notNullable().defaultTo('');
    table.string('last_name').notNullable().defaultTo('');
    table.string('github_username').notNullable().defaultTo('');
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.boolean('is_lead_instructor').notNullable();
    table.string('program').notNullable();
    table.string('class').notNullable();
    table.string('galvanize_username').notNullable();
    table.string('galvanize_password').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('instructors');
};
