const storage = require('./storage.js');

const addMessage = (username, message) => {
    return new Promise((resolve, reject) => {
        if (!username || !message){
            console.error('[ADD Message Controller], no hay usuario o mensaje');
            return reject('Incorrect data')
        }
        
        console.log(`Username is: ${username} and message: ${message}`);
        const fullMessage = {
            user: username,
            message: message,
            date: new Date(),
        };
        storage.add(fullMessage);
        console.log(fullMessage);
        resolve(fullMessage);
    });
}

const getMessages = () => {
    return new Promise((resolve, reject) => {
        try {
            resolve(storage.list())
        } catch (error) {
            reject(new Error(error))
        }
    })
}

module.exports = {
    addMessage,
    getMessages,
}