const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Title is required"],
        minlength: [4, "Author's name must be at least 4 characters long"]
      },
}, { timestamps: true });

module.exports.Author = mongoose.model('Author', AuthorSchema);