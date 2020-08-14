const storage = require('./storage.js');

const addMessage = (chat, username, message) => {
    return new Promise((resolve, reject) => {
        if (!username || !message || !chat){
            console.error('[ADD Message Controller], there is not user message or chat');
            return reject('Incorrect data')
        }
        
        const fullMessage = {
            chat: chat,
            user: username,
            message: message,
            date: new Date(),
        };
        storage.add(fullMessage);
        resolve(fullMessage);
    });
}

const getMessages = (chat) => {
    return new Promise( async (resolve, reject) => {
        resolve(storage.list(chat))
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

const deleteMessage = (id) => {
    return new Promise( async (resolve, reject) => {
        if(!id) {
            reject(new Error('Not ID'));
        }

        try {
            const result = await storage.remove(id);
            resolve(result);
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}