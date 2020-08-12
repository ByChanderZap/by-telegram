const express = require('express')
const router = express.Router();
const response = require('../../network/response.js')
const controller = require('./controller.js');

//  Get all chats
router.get('/:userId?', async (req, res) => {
    const userId = req.params.userId;

    try {
        const data = await controller.listChats(userId);
        response.success(req, res, data, 200);
    } catch (error) {
        response.error(req, res, "Error getting messages", 400, error);        
    }
})

//  Create a new Chat
router.post('/', async (req, res) => {
    const { users } = req.body;

    try {
        const data = await controller.createChat(users);
        //  req, res, messageForTheUser, status
        response.success(req, res, data, 201);

    } catch (error) {
        //  req, res, error, status, details
        response.error(req, res, "Error creating a new chat", 500, error);
    }
})

module.exports = router;