const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

router.post('/message', (req, res) =>{
//    console.log(req.headers);
    res.header({
        "custom-header": "Valor personalizado"
    })
    res.status(200).send({
        message: 'Todo funciono a la perfeccion',
        body: 'Creacion correcta'
    });
})

router.delete('/message', (req, res) =>{
    console.log(req.query);
    res.send(`Arrar ordered by ${req.query.orderBy} your age is ${req.query}`)
})

// app.use('/', function (req, res) {
//     res.send('hola!');
// });

app.listen(3000);

console.log('Server on port 3000: http://localhost:3000')