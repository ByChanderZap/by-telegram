const express = require('express')
const router = express.Router();
const response = require('../../network/response.js')
const controller = require('./controller.js');


router.get('/', (req, res) => {
    //    console.log(req.headers);
    //  res.header({"custom-header": "Valor personalizado"})

    response.success(req, res, "Esto es get, y este es un mensaje desde response.js");
});

router.post('/', async (req, res) => {
    try {
        const fullMessage = await controller.addMessage(req.body.user, req.body.message);
        //  req, res, message, status
        response.success(req, res, fullMessage, 201);
    } catch (error) {
        //  req, res, message, status, details
        response.error(req, res, error, 400, 'Error in controller')
    }
});


module.exports = router;