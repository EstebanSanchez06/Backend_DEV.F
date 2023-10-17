/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.hasTable('sales').then(exists =>{
    if(!exists){
        return knex.schema.createTable('sales', table =>{
            table.increments('sale_id').unique().primary()
            table.integer('product_id').notNullable()
            table.integer('client_id').notNullable()
            table.foreign('product_id').references('products.product_id')
            table.foreign('client_id').references('clients.client_id')
        })
    }
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.hasTable('sales').then(exists =>{
    if(exists){
        return knex.schema.dropTable('sales')
    }
  })
};
