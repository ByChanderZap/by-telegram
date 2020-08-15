const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket.js')
const db = require('./db.js')
const router = require('./network/routes.js');

 
db();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

socket.connect(server);
//app.use(router);
router(app);

// app.use('/', function (req, res) {
//     res.send('hola!');
// });

app.use('/app', express.static('public'))

server.listen(3000, () => {
    console.log('Server on port 3000: http://localhost:3000')
});

