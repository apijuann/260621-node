const express = require('express')
const server = express()
const path = require('path')

//ruta home
server.get('/', function (req, res) {
    const filePath = path.join(__dirname, 'src', 'views', 'home.html')
    res.sendFile(filePath)
})

//ruta edit
server.get('/edit', function (req, res) {
    const filePath = path.join(__dirname, 'src', 'views', 'edit.html')
    res.sendFile(filePath)
})

//ruta public
const publicPath = path.join('src', 'public')
server.use(express.static(publicPath))

server.listen(4000)

