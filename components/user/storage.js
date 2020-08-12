const Model = require('./model.js');

const addUser = (user) => {
    const myUser = new Model(user);
    return myUser.save();
}

const allUsers = async () => {
    return Model.find();    
}

module.exports = {
    add: addUser,   //add
    listAllUsers: allUsers  //  get all
}