const storage = require('./storage.js');


const addUser = (name) => {
    if (!name){
        return Promise.reject('Invalid name');
    }
    const user = {
        name: name
    };
    return storage.add(user);
}

const listUsers = () => {
    return storage.listAllUsers();
}

module.exports = {
    addUser,
    listUsers,
}