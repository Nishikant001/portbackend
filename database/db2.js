const mongoose = require('mongoose');
const validator = require('validator');

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
            message: 'Invalid email address'
        },
        required: true
    },
    message: String
});

const collection = mongoose.model('collection', Schema);

module.exports = collection;
