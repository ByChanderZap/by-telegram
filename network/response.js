exports.success = (req, res, message, status) => {
    res.status(status || 200).send({
        messages: message
    });
}

exports.error = (req, res, message, status, details) => {
    //console.log(details);
    console.log(details);
    
    res.status(status || 500).send({
        error: message,
        body: 'none'
    });
}