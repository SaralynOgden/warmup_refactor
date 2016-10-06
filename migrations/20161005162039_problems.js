'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('problems', (t) => {
    t.increments();
    t.text('problem_text').notNullable();
    t.string('type').notNullable();
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('problems');
};
