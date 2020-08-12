const storage = require('./storage.js');

const createChat = (users) => {
    if (!users){
        return Promise.reject('Two users needed');
    }
    const newChat = {
        users: users
    }
    //console.log(newChat)
    return storage.CreateChat(newChat);
}

const listChats = () => {

}

module.exports = {
    createChat,
    listChats
}