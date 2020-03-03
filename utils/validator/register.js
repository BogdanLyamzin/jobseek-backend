const {NO_EMAIL, NOT_EMAIL, NOT_PASSWORD_LENGTH, NO_PASSWORD, DO_NOT_MATCH} = require('./type')
const Validator = require('validator');

const isExist = require('./is-empty')

module.exports = function validateRegisterInputs(data) {

    const errors = {}


    if(!Validator.isEmail(data.email)) {
        errors.email = NOT_EMAIL;
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = NO_EMAIL;
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = NOT_PASSWORD_LENGTH;
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = NO_PASSWORD;
    }

    if(!Validator.isLength(data.password2, {min: 6, max: 30})) {
        errors.password2 = NOT_PASSWORD_LENGTH;
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

