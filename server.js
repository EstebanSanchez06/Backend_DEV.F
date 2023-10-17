const express = require ('express')
const app = express()
const productsRoutes = require('./routes/productsRouter')
const clientRoutes = require('./routes/clientsRoutes')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/api/v1/',productsRoutes)
app.use('/api/v1/', clientRoutes)

app.listen(3000, ()=>{console.log('Escuchando desde 3000')})