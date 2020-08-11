const express = require('express');
const bodyParser = require('body-parser');
//const router = require('./components/messages/network.js')
const router = require('./network/routes')
 
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(router);
router(app);

// app.use('/', function (req, res) {
//     res.send('hola!');
// });

app.use('/app', express.static('public'))

app.listen(3000);

console.log('Server on port 3000: http://localhost:3000')