const express = require('express');
const multer = require('multer');
const router = express.Router();
const response = require('../../network/response.js')
const controller = require('./controller.js');

const upload = multer({
    dest: 'uploads/files/',
})

router.get('/', async (req, res) => {
    const { chat } = req.body || null;
    try {
        const data = await controller.getMessages(chat);
        response.success(req, res, data, 200);
    } catch (error) {
        response.error(req, res, error, 400, 'Error getting getting messages');
    }

});

router.post('/', upload.single('file'), async (req, res) => {
    //console.log("hola?", req.file)
    try {
        const fullMessage = await controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file);
        //  req, res, message, status
        //console.log(fullMessage)
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

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const data = await controller.deleteMessage(id);
        response.success(req, res, `User ${id} deleted`, 200);
    } catch (error) {
        response.error(req, res, "Error deliting message", 400, error);
    }
})

module.exports = router;