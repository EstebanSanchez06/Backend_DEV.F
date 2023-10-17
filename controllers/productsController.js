const ModelProducts = require('../models/Products')

const getAllProducts = (request, response)=>{
   if(request.query.price){
    ModelProducts.getByPrice(request.query.price)
    .then(result => {
        response.status(200).send(result)
    })
    .catch(error => response.status(400).send({message: 'Could not fetch products', error: error}))

   }else{
    ModelProducts.getAll()
    .then(result => {
        response.status(200).send(result)
    })
    .catch(error => response.status(400).send({message: 'Could not fetch products', error: error}))
   }
}

const getById = (request, response) => {
    ModelProducts.getById(request.params.id)
    .then(result => response.status(200).send(result))
    .catch(error => response.status(400).send({message:'Could not find product', error : error}))
}
const getBySKU = (request, response) =>{
    ModelProducts.getBySKU(request.params.SKU)
    .then(result => response.status(200).send(result))
    .catch(error => response.status(400).send({message: 'Could not find product', error: error}))

}

module.exports={
    getAllProducts,
    getById,
    getBySKU, 
}