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

io.on("connection", socket => {
    console.log("Nice to meet you. (shake hand)");
    // console.log(socket.id);
    socket.emit("sendingDataToOthers", "Welcoming Reem Ismail");
    // socket.on("clientevent", data => {
    //     socket.broadcast.emet("sendingDataToOthers", data);
    // });
});

