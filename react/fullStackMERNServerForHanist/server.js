const express = require('express');
const cors = require('cors');
const app = express();
require('./config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes')(app);
const server = app.listen(8000, () =>
    console.log('The server is all fired up and Listening at port 8000')
);

const io = require('socket.io')(server, { cors: true });
var clients = {}

io.on('connection', socket => {
  clients[socket.id] = socket;
//   console.log(socket);
  console.log(socket.id);
  socket.on('message', ({ name, message }) => {
    io.emit('message', { name, message })
  })
  socket.on('disconnect', function() {
    delete clients[socket.id];
    console.clear();
    console.log("deleted user id is : ["+socket.id+"]" );
})
})