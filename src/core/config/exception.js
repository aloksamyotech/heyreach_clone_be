class CustomError extends Error {
    constructor(statusCode, message = "Something went wrong", errors = [], isOperational = true, stack = '') {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors
        this.isOperational = isOperational;
        this.stack = stack || new Error().stack;
        Error.captureStackTrace(this, this.constructor);
    }
}

export default CustomError;