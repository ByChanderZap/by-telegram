const storage = require('./storage.js');

const addMessage = (username, message) => {
    return new Promise((resolve, reject) => {
        if (!username || !message){
            console.error('[ADD Message Controller], there is not user or message');
            return reject('Incorrect data')
        }
        
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
    return new Promise( async (resolve, reject) => {
        try {
            const data = await storage.list();
            resolve(data);
        } catch (error) {
            reject(new Error(error))
        }
    })
}

const updateMessage = (id, message) => {
    return new Promise( async (resolve, reject) => {
        if (id && message) {
            try {
                const data = await storage.updateText(id, message);
                resolve(data);
            } catch (error) {
                reject(new Error(error));
            }
        }else {
            reject(new Error('Missing params'));
        }
    });
};

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
}