const {NO_PASSWORD, NOT_PASSWORD_LENGTH, DO_NOT_MATCH} = require('./type')
const Validator = require('validator');

const isExist = require('./is-empty')

module.exports = function validateRegisterInputs(data) {

    const errors = {}


    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = NOT_PASSWORD_LENGTH;
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = NO_PASSWORD;
    }

    if(!Validator.equals(data.password, data.password2)) {
        errors.password2 = DO_NOT_MATCH;
    }

    if(Validator.isEmpty(data.password2)) {
        errors.password2 = NO_PASSWORD;
    }

    return {
        errors,
        isValid: isExist(errors)
    }
}

