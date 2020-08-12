const express = require('express');
const message = require('../components/messages/network.js')
const user = require('../components/user/network.js')
const chat = require('../components/chat/network.js')



const routes = (server) => {
    server.use('/message', message);
    server.use('/user', user);
    server.use('/chat', chat)
}

module.exports = routes; 