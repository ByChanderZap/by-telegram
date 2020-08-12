const Model = require('./model.js');

const addUser = (user) => {
    const myUser = new Model(user);
    return myUser.save();
}


module.exports = {
    add: addUser,
    //get, update, delete
}