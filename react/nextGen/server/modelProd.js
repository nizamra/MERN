const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [4, "Title must be at least 4 characters long"]
    },
    price: {
        type: Number,
        required: [true, 'You Should give an estimation at least?'],
        min: [3, 'This is not an acceptable price. Really {VALUE}!!!. Please increase it'],
        max: [999, "We don't trade luxary items"],
    },
    description: {
        type: String,
        minlength: [6, "Description must be at least 4 characters long Max 26"],
        unique: [true, "You can't be serious, give a real description man"],
        maxlength: [26, "Description has a limit of 26 characters"]
    }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);
