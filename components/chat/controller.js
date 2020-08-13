const storage = require('./storage.js');

const createChat = (users) => {
    if (!users || !Array.isArray(users)){
        return Promise.reject('Two users needed');
    }
    const newChat = {
        users: users
    }
    //console.log(newChat)
    return storage.createNewChat(newChat);
}

const listChats = (userId) => {
    return new Promise( async (resolve, reject) => {
        try {
            const data = await storage.getChats(userId);
            resolve(data);
        } catch (error) {
            reject(new Error(error));
        }
    });
}

module.exports = {
    createChat,
    listChats
}