const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    
    authors: {
        type: [String],
        required: true
    },

    description: {
        type: String,
    },

    image:{
        type: String,
    },

    link: {
        type: String,
        required: true
    }
});


//Convert the book schema into a Mongoose Model
const Book = mongoose.model("Book", bookSchema);

//Export the book
module.exports = Book;