
function addMessage(username, message) {
    return new Promise((resolve, reject) => {
        if (!username || !message){
            console.error('[ADD Message Controller], no hay usuario o mensaje');
            return reject('Incorrect data')
        }
        
        console.log(`Username is: ${username} and message: ${message}`);
        const fullMessage = {
            user: username,
            message: message,
            date: new Date(),
        };

        console.log(fullMessage);

        resolve(fullMessage);
    });
}

module.exports = {
    addMessage,
}