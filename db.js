const db = require('mongoose');
const { dbURL } = require('./dbkeys');  //  Url of my db with user and password on it

db.Promise = global.Promise;

const connect = async () => {
    try {
            await db.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('[DB] Conecction success')
    } catch (error) {
        console.error(error)
    }
}

module.exports = connect;