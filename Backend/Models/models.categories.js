const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Category
let Category = new Schema({
    categoryName: {
        type: String
    },
    categoryDescription: {
        type: String
    }
},{
    collection: 'category'
});

module.exports = mongoose.model('category', Category);
