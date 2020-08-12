const express = require('express')
const router = express.Router();
const response = require('../../network/response.js')
const controller = require('./controller.js');


router.post('/', async (req, res) => {
    const { name } = req.body;
    try {
        const data = await controller.addUser(name);
        let finalData = {
            data: data,
            message: "User added successfully"
        }
        //  req, res, message, status
        response.success(req, res, finalData, 201);
    } catch (error) {
        // req, res, error, status, details
        response.error(req, res, "Error creating user", 400, error);
    }
});

router.get('/', async (req, res) => {
    try {
        data = await controller.listUsers();
        response.success(req, res, data, 200);
    } catch (error) {
        response.error(req, res, "Error getting messages", 500, error);
    }
})

module.exports = router;