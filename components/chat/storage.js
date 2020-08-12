const Model = require('./model.js');


function CreateChat(chat) {
    const myChat = new Model(chat);
    return myChat.save();
}

const getChats = () => {

}

module.exports = {
    CreateChat,
    getChats
}