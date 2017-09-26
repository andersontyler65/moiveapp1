
exports.up = function(knex, Promise) {
  return knex.schema.createTable('director', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('nationality').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('director')
};
