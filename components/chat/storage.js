const Model = require('./model.js');


const CreateChat = (chat) => {
    const myChat = new Model(chat);
    return myChat.save();
}

const getChats = (userId) => {
    return new Promise ((resolve, reject) => {
        let filter = {}
        if(userId){ // if there is a user id, will create a filter with that id
            filter = {
                users: userId
            }
        }

        //  Here we will recibe our documents created with the users data on it, and not only a reference
        Model.find(filter).populate('users').exec((err, populated) => { 
            if (err) {
                reject(err);
                return false
            } else {
                resolve(populated)
            }
        })
    })
}

module.exports = {
    CreateChat,
    getChats
}