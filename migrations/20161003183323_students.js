'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', (table) => {
    table.increments();
    table.string('first_name').notNullable().defaultTo('');
    table.string('last_name').notNullable().defaultTo('');
    table.string('github_username').notNullable().defaultTo('');
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.string('program').notNullable();
    table.string('class').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {

};
