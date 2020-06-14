const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for users
let Users = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    confirmPassword:{
        type :String
    },
    phone: {
        type:String
    }
}, {
    collection: 'users'
});

module.exports = mongoose.model('users', Users);
