const express = require('express')
const router = express.Router();
const response = require('../../network/response.js')
const controller = require('./controller.js');


router.get('/', async (req, res) => {
    try {
        const allMessages = await controller.getMessages();
        response.success(req, res, allMessages, 200);
    } catch (error) {
        response.error(req, res, error, 400, 'Error getting getting messages');
    }
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