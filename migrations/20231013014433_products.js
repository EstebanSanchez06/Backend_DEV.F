/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.hasTable('products').then(exists=>{
    if(!exists){
        return knex.schema.createTable('products', table =>{
            table.increments('product_id').primary()
            table.string('product_name').notNullable()
            table.decimal('product_price')
            table.integer('product_SKU').notNullable()
            table.integer('product_quantity')
        })
    }
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.hasTable('products').then(exists =>{
    if(exists){
      return knex.schema.dropTable('products')
    }
  })
};
