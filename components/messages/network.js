const express = require('express')
const router = express.Router();
const response = require('../../network/response.js')
const controller = require('./controller.js');


router.get('/', async (req, res) => {
    const { user } = req.query || null;
    
    try {
        const data = await controller.getMessages(user);
        response.success(req, res, data, 200);
    } catch (error) {
        response.error(req, res, error, 400, 'Error getting getting messages');
    }

});

router.post('/', async (req, res) => {
    console.log(req.body)
    try {
        const fullMessage = await controller.addMessage(req.body.user, req.body.message);
        //  req, res, message, status
        response.success(req, res, fullMessage, 201);
    } catch (error) {
        //  req, res, message, status, details
        response.error(req, res, error, 400, 'Error in controller')
    }
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { message } = req.body;
    try {
        const data = await controller.updateMessage(id, message);
        response.success(req, res, data, 201);
    } catch (error) {
        console.log(error);
        response.error(req, res, "Error", 400, error)
    }
});


module.exports = router;