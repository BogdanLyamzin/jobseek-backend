const Validator = require('validator');
const isExist = require('./is-empty')
const {NO_EMAIL, NOT_EMAIL, NO_PASSWORD} = require('./type')

module.exports = function validateLoginInputs(data) {

    const errors = {}


    if(!Validator.isEmail(data.email)) {
        errors.email = NOT_EMAIL;
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = NO_EMAIL;
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = NO_PASSWORD;
    }

    return {
        errors,
        isValid: isExist(errors)
    }
}

