const Model = require('./model.js');


const addMessage = (message) => {
    const myMessage = new Model(message);
    myMessage.save();
}

const getMessage = async (askUser) => {
    let filter = {}
    if(askUser) {
        filter = {
            user: new RegExp(askUser, "i") 
          };
    }

    try {
        const data = await Model.find(filter);
        return data;
    } catch (error) {
        console.log('Error on db request');
        return new Error('Error getting messages')
    }
}

const updateText = async (id, message) => {
    const requestedMessage = await Model.findById(id)
    requestedMessage.message = message;
    const messageUpdated = await requestedMessage.save();
    return messageUpdated;
}

const removeMessage = async (id) => {
    try {
        const dSuccess = await Model.deleteOne({_id:id})
        return dSuccess
    } catch (error) {
        console.log(new Error('Error on delete'))
        return(error);
    }
    
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    remove: removeMessage
    //get, update, delete
}