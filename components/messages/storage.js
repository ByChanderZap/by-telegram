const db = require('mongoose');
const { dbURL } = require('./dbkeys');
const Model = require('./model.js')

db.Promise = global.Promise;

try {
    db.connect(dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('[DB] Conecction success')
} catch (error) {
    console.error(error)
}

const addMessage = (message) => {
    const myMessage = new Model(message);
    myMessage.save();
}

const getMessage = async () => {
    try {
        const data = await Model.find();
        return data;
    } catch (error) {
        console.log('Error getting messages');
        return new Error('Error getting messages')
    }
}

const updateText = async (id, message) => {
    const requestedMessage = await Model.findOne({
        _id: id
    });
    requestedMessage.message = message;
    const messageUpdated = await requestedMessage.save();
    return messageUpdated;
}



module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    //get, update, delete
}