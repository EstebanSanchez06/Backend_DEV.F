const knex = require('../config')

const getAll = (limit, offset) =>{
    return knex
    .select('*')
    .from('sales')
    .limit(limit)
    .offset(offset)
}

const getById = (id) =>{
    return knex
    .select('*')
    .from('sales')
    .where({sale_id:id})
}

const getByClientId = (id) =>{
    return knex
    .select('*')
    .from('sales')
    .where({client_id:id})
}

const getByProductId = (id) =>{
    return knex
    .select('*')
    .from('sales')
    .where({product_id:id})
}

const createSale = (body) =>{
    return knex
    .insert(body)
    .into('sales')
    .returning(['*'])
}

module.exports={
    getAll,
    getByClientId,
    getByProductId,
    createSale,
    getById
}