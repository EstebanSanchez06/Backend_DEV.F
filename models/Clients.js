const knex = require('../config')

const getAll = () =>{
    return knex
    .select('*')
    .from('clients')
}
const getById = (id) =>{
    return knex
    .select('*')
    .from('clients')
    .where({client_id: id})
}

const getByCity = (city) =>{
    return knex
    .select('*')
    .from('clients')
    .where({client_city:city})
}
const createClient = (body) =>{
    return knex
    .insert(body)
    .into('clients')
    .returning('*')
}
const getAllLimit = (limit) =>{
    return knex
    .select('*')
    .from('clients')
    .limit(limit)
}

module.exports ={
    getAll,
    getById,
    getByCity,
    createClient,
    getAllLimit
}