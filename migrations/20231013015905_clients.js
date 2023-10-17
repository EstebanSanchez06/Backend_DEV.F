/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.hasTable('clients').then(exists =>{
    if(!exists){
        return knex.schema.createTable('clients', table => {
            table.increments('client_id').primary()
            table.string('client_name').notNullable()
            table.string('client_lastName').notNullable()
            table.string('client_email').notNullable()
            table.string('client_phoneNumber').notNullable()
            table.string('client_address')
            table.integer('client_postalCode')
            table.string('client_city')
        })
    }
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.hasTable('clients').then(exists =>{
    if(exists){
      return knex.schema.dropTable('clients')
    }
  })
};
