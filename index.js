const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db.js')
const router = require('./network/routes')
 
db();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(router);
router(app);

// app.use('/', function (req, res) {
//     res.send('hola!');
// });

app.use('/app', express.static('public'))

app.listen(3000);

console.log('Server on port 3000: http://localhost:3000')