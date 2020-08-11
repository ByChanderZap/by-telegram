const list = [];

const addMessage = (message) => {
    list.push(message)
}

const getMessage = () => {
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessage
    //get, update, delete
}