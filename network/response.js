exports.success = (req, res, message, status) => {
    res.status(status || 200).send({
        data: message
    });
}

exports.error = (req, res, error, status, details) => {
    //console.log(details);
    console.log(details);
    
    res.status(status || 500).send({
        error: error,
    });
}