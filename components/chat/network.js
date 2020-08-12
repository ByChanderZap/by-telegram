const express = require('express')
const router = express.Router();
const response = require('../../network/response.js')
const controller = require('./controller.js');

//  Get all chats
router.get('/', (req, res) => {
    
})

//  Create a new Chat
router.post('/', async (req, res) => {
    const { users } = req.body;

    try {
        const data = await controller.createChat(users);
        //  req, res, messageForTheUser, status
        response.success(req, res, data, 201)

    } catch (error) {
        //  req, res, error, status, details
        response.error(req, res, "Error creating a new chat", 500, error)
    }
})

module.exports = router;