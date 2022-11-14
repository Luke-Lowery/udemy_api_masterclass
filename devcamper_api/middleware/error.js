const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = {...err};

    error.message = err.message;

    //log for dev
    console.log(error);

    //Mongoose bad ObjectId
    if(err.name === 'CastError') {
        const message = `Bootcamp not found with id of ${error.value}`;
        error = new ErrorResponse(message, 404);
    }

    //Mongoose Duplicate Key
    if(err.code === 11000){
        const message = 'Duplicate field value entered';
        error = new ErrorResponse(message, 400);
    }

    //Mongoose Validation error
    if(err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message, 400);
    }

    console.log(error.name.red);

    res.status(error.statusCode || 500).json({
        success: false, 
        error: error.message || 'Server Error'
    });
};

module.exports = errorHandler;