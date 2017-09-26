
exports.up = function(knex, Promise) {
  return knex.schema.createTable('director', (table) => {
    table.increments('id').primary()
    table.text('name').notNullable()
    table.text('nationality').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('director')
};
