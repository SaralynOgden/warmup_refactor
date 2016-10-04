
exports.up = function(knex, Promise) {
  return knex.schema.createTable('problems', (table) => {
    table.increments();
    table.string('type').notNullable();
    table.string('heading').notNullable();
    table.string('description').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('problems');
};
