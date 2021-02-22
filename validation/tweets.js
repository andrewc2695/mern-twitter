const { default: validator } = require('validator');
const Vlaidator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTweetInput(data) {
    let errors = {};

    data.text = validText(data.text) ? data.text : '';

    if(!validator.isLength(data.text, {min: 5, max: 140})) {
        errors.text = 'Tweet must be between 5 and 140 characters'
    }

    if(validator.isEmpty(data.text)) {
        errors.text = 'Text field is required'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}