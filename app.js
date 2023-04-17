const express = require('express')
const http = require('http')
const app = express()
const cors = require('cors')
const socketIO = require('socket.io')
const server = http.createServer(app)
const io = socketIO(server, {
    cors: {
        origin: [
              "http://localhost:3000", 
              "http://localhost"
        ],
    
        methods: ["GET", "POST", "PUT"]
      }
})
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.post('/', (req, res) => {
    console.log('post works!')
})
io.on('connection', (socket) => {
    console.log(socket.id);

})


server.listen(3005, () => {
    console.log("socket server listening on port 3005");
})