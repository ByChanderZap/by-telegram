const Model = require('./model.js');


const addMessage = (message) => {
    const myMessage = new Model(message);
    myMessage.save();
}

const getMessage = (askUser) => {
    return new Promise(async (resolve, reject) => {
        let filter = {}
        if (askUser) {
            filter = {
                user: new RegExp(askUser, "i")
            };
        }

        Model.find(filter).populate('user').exec((err, populated) => {
            if (err) {
                reject(err);
                return false
            } else {
                resolve(populated)
            }
        })
    })
}

const updateText = async (id, message) => {
    const requestedMessage = await Model.findById(id)
    requestedMessage.message = message;
    const messageUpdated = await requestedMessage.save();
    return messageUpdated;
}

const removeMessage = async (id) => {
    try {
        const dSuccess = await Model.deleteOne({ _id: id })
        return dSuccess
    } catch (error) {
        console.log(new Error('Error on delete'))
        return (error);
    }

}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    remove: removeMessage
    //get, update, delete
}