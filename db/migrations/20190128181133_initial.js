
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('cities', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('state')
      table.integer('population')
      table.boolean('capital')

      table.timeStamps(true, true)
    }),

    knex.schema.createTable('restaurants', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('address')
      table.string('city')
      table.integer('rating')
      table.string('avg_cost')
      table.integer('city_id').unsigned()
      table.foreign('city_id')
        .references('cities.id')

      table.timeStamps(true, true)
    }) 
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('restaurants'),
    knex.schema.dropTable('cities')
  ])
}
