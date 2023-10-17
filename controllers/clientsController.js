const ModelClients = require('../models/Clients')

const getAllClients = (request, response) =>{
    if(request.query?.limit){
        ModelClients.getAllLimit(request.query.limit)
        .then(result => response.status(200).send(result))
        .catch(error => response.status(400).send({message: 'Could not fetch data' , error:error}))
    }else{
      ModelClients.getAll()
        .then(result => response.status(200).send(result))
        .catch(error => response.status(400).send({message: 'Could not fetch data' , error:error}))
    }

}
const getClientById = (request, response) => {
    ModelClients.getById(request.params.id)
    .then(result => response.status(200).send(result))
    .catch(error => response.status(400).send({message: 'Could not fetch data' , error:error}))

}
const getClientByCity = (request, response) =>{
    ModelClients.getByCity(request.params.city)
    .then(result => response.status(400).send(result))
    .catch(error => response.status(400).send({message: 'Could not fetch data' , error:error}))

}
const createClient = (request, response) =>{
    ModelClients.createClient(request.body)
    .then(result => response.status(201).send({message: 'Client created', result: result}))
    .catch(error => response.status(400).send({message: 'Could not create client' , error:error}))
}
module.exports={
    getAllClients,
    getClientById,
    getClientByCity,
    createClient
}