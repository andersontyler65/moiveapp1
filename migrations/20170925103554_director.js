
exports.up = function(knex, Promise) {
  return knex.schema.createTable('director', (table) => {
    table.increments('id').primary()
    table.varchar('name').notNullable()
    table.varchar('nationality').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('director')
};
