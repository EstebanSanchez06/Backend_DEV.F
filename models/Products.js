const knex = require('../config')

const getAll = ()=>{
    return knex
    .select('*')
    .from('products')
}
const getById = (productId) =>{
    return knex
    .select('*')
    .from('products')
    .where({product_id: productId})
}

const getBySKU = (SKU) =>{
    return knex
    .select('*')
    .from('products')
    .where({product_SKU:SKU})
}

const createProduct = (body)=>{
    return knex
    .insert(body)
    .into('products')
    .returning(['*'])
}
const getByPrice = (price) =>{
    return knex
    .select('*')
    .from('products')
    .where('product_price', price)
}
module.exports ={
    getAll,
    getById,
    getBySKU,
    createProduct,
    getByPrice
}