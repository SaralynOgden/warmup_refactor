
exports.up = function(knex, Promise) {
  return knex.schema.createTable('problems', (table) => {
    table.increments();
    table.string('heading').notNullable();
    table.string('description').notNullable().defaultTo('');
    table.string('').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('students');

};
