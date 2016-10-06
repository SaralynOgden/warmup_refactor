'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('cohorts', (t) => {
    t.increments();
    t.string('name').notNullable().unique();
    t.string('location').notNullable();
    t.enum('type', ['fs', 'ds']).notNullable(); //probably wrong
    t.string('lead_instructor').notNullable();
    t.dateTime('start_date').notNullable(); //this is wrong, I think
    t.dateTime('end_date').notNullable(); //this is wrong, I think
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cohorts');
};
