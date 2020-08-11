const db = require('mongoose');
const { dbURL } = require('./dbkeys');

db.Promise = global.Promise;
db.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

console.log('[DB] Conecction success')

const addMessage = (message) => {
    list.push(message)
}

const getMessage = () => {
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessage
    //get, update, delete
}