const ModelSales = require('../models/Sales')

const getAllSales = (request, response) => {

        ModelSales.getAll(request.query.limit, request.query.offset)
        .then(result => response.status(200).send(result))
        .catch(error => response.status(400).send({message:'Could not fetch data', error:error }))
    
}

const getByClientId = (request, response) =>{
    ModelSales.getByClientId(request.params.id)
    .then(result => response.status(200).send(result))
    .catch(error => response.status(400).send({message:'Could not fetch data', error:error }))
}

const getByProductId = (request,response) =>{
    ModelSales.getByProductId(request.params.id)
    .then(result => response.status(200).send(result))
    .catch(error => response.status(400).send({message:'Could not fetch data', error:error }))
}
const getById = (request, response) =>{
    ModelSales.getById(request.params.id)
    .then(result => response.status(200).send(result))
    .catch(error => response.status(400).send({message:'Could not fetch data', error:error }))

}
const createSale = (request,response) =>{
    ModelSales.createSale(request.body)
    .then(result => response.status(201).send(result))
    .catch(error => response.status(401).send({message:'Could not fetch data', error:error }))

}

module.exports={
    getAllSales,
    getByClientId,
    getByProductId,
    getById,
    createSale
}