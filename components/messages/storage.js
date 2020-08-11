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

module.exports = {
    add: addMessage,
    list: getMessage
    //get, update, delete
}