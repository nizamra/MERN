const express = require('express');
const cors = require('cors');
const app = express();
require('./config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes')(app);
app.listen(8000, () =>
    console.log('The server is all fired up and Listening at port 8000')
);

